package tn.esprit.springproject.services;

import tn.esprit.springproject.entities.Chambre;
import tn.esprit.springproject.entities.Etudiant;
import tn.esprit.springproject.entities.TypeChambre;

import java.util.List;

public interface EtudiantService {
    List<Etudiant> getEtudiantByReservationEstValide(Boolean estValide);
    List<Etudiant> getAllEtudiants();

    Etudiant addEtudiant(Etudiant etudiant);

    Etudiant updateEtudiant(Etudiant etudiant);

    Etudiant getEtudiantById(Long idEtudiant);

    void deleteEtudiant(Long idEtudiant);
}
