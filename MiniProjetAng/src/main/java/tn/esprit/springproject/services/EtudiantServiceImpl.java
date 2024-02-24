package tn.esprit.springproject.services;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import tn.esprit.springproject.entities.Etudiant;
import tn.esprit.springproject.entities.TypeChambre;
import tn.esprit.springproject.repositories.EtudiantRepository;

import java.util.List;

@Service
@AllArgsConstructor
public class EtudiantServiceImpl implements EtudiantService {
    EtudiantRepository etudiantRepository;


    @Override
    public List<Etudiant> getEtudiantByReservationEstValide(Boolean estValide) {
        return etudiantRepository.findByReservationsEstValide(estValide);
    }


    @Override
    public List<Etudiant> getAllEtudiants() {
        return (List<Etudiant>) etudiantRepository.findAll();
    }

    @Override
    public Etudiant addEtudiant(Etudiant etudiant) {
        return etudiantRepository.save(etudiant);
    }

    @Override
    public Etudiant updateEtudiant(Etudiant etudiant) {
        return etudiantRepository.save(etudiant);
    }

    @Override
    public Etudiant getEtudiantById(Long idEtudiant) {
        return etudiantRepository.findById(idEtudiant).get();
    }

    @Override
    public void deleteEtudiant(Long idEtudiant) { etudiantRepository.deleteById(idEtudiant); }
}
