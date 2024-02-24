package tn.esprit.springproject.services;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.springproject.entities.Bloc;
import tn.esprit.springproject.entities.Chambre;
import tn.esprit.springproject.entities.TypeChambre;
import tn.esprit.springproject.repositories.BlocRepository;
import tn.esprit.springproject.repositories.ChambreRepository;

import java.util.List;

@Service
@AllArgsConstructor
public class ChambreServiceImpl implements ChambreService {
    ChambreRepository chambreRepository;
    BlocRepository blocRepository;

    @Override
    public List<Chambre> getChambreByIdBlocAndTypeC(Long idBloc, TypeChambre typeChambre) {
        return chambreRepository.findByBlocIdBlocAndTypeC(idBloc,typeChambre);
    }

    @Override
    public List<Chambre> getAllChambres() {
        return (List<Chambre>) chambreRepository.findAll();
    }

    @Override
    @Transactional
    public Chambre addChambre(Chambre chambre, Long idBloc) {
        Bloc bloc = blocRepository.findById(idBloc)
                .orElseThrow(() -> new RuntimeException("Bloc with id " + idBloc + " not found"));

        Chambre newChambre = new Chambre();
        chambre.setBloc(bloc);
        newChambre.setNumeroChambre(chambre.getNumeroChambre());
        newChambre.setTypeC(chambre.getTypeC());
        newChambre.setTotale_cap(3);
        return chambreRepository.save(chambre);
    }
    @Override
    @Transactional
    public Chambre updateChambre(Chambre chambre, Long idChambre, Long idBloc) {
        if (idChambre == null || idBloc == null) {
            throw new IllegalArgumentException("Chambre ID and Bloc ID cannot be null for update.");
        }
        Chambre chambre1 = chambreRepository.findById(idChambre)
                .orElseThrow(() -> new RuntimeException("chambre with id " + idChambre + " not found"));
        Bloc bloc = blocRepository.findById(idBloc)
                .orElseGet(() -> {
                    // Create and save a new Bloc if not found
                    Bloc newBloc = new Bloc();
                    // Set Bloc properties as needed
                    return blocRepository.save(newBloc);
                });
        chambre1.setNumeroChambre(chambre.getNumeroChambre());
        chambre1.setTypeC(chambre.getTypeC());
        chambre1.setBloc(bloc);
        return chambreRepository.save(chambre1);
    }
    @Override
    public Chambre getChambreById(Long idChambre) {
        return chambreRepository.findById(idChambre).get();
    }

    @Override
    public void deleteChambre(Long idChambre) {
        chambreRepository.deleteById(idChambre);

    }
}
