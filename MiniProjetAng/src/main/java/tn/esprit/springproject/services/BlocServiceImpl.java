package tn.esprit.springproject.services;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.springproject.entities.Bloc;
import tn.esprit.springproject.repositories.BlocRepository;
import tn.esprit.springproject.repositories.EtudiantRepository;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class BlocServiceImpl implements BlocService{
    BlocRepository blocRepository;
    @Override
    public List<Bloc> getBlocByCapacite(Long capacite){
        /*List<Bloc> blocs= (List<Bloc>) blocRepository.findAll();
        List<Bloc> blocsByCapacite = new ArrayList<>();
        for (Bloc bloc:blocs){
            if (bloc.getCapaciteBloc()==capacite)
                blocsByCapacite.add(bloc);
        }
        return blocsByCapacite;*/

        return blocRepository.findByCapaciteBlocAndNomBloc(capacite,"a");
    }

    @Override
    public List<Bloc> getAllBlocs() {
        return (List<Bloc>) blocRepository.findAll();
    }

    @Override
    public Bloc addBloc(Bloc bloc) {
        return blocRepository.save(bloc);
    }

    @Override
    public Bloc updateBloc(Bloc bloc) {
        return blocRepository.save(bloc);
    }

    @Override
    public Bloc getBlocById(Long idBloc) {
        return blocRepository.findById(idBloc).get();
    }

    @Override
    public void deleteBloc(Long idBloc) {
       blocRepository.deleteById(idBloc);
    }



    @Override
    public List<Bloc> getBlocsForFoyer(Long foyerId) {
        return blocRepository.findBlocsByFoyerId(foyerId);
    }
}
