package tn.esprit.springproject.services;

import tn.esprit.springproject.entities.Etudiant;
import tn.esprit.springproject.entities.Foyer;
import tn.esprit.springproject.entities.Universite;

import java.util.List;

public interface FoyerService {
    List<Foyer> getFoyerByAdresseUniversite(String adresse);
    List<Foyer> getAllFoyers();

    Foyer addFoyer(Foyer foyer);

    Foyer updateFoyer(Foyer foyer);

    Foyer getFoyerById(Long idFoyer);

    void deleteFoyer(Long idFoyer);

    public Foyer getFoyerByUniversite( long idUniversite);

    List<Universite> getAvailableUniversities();

    List<Foyer> searchFoyers(String nomFoyer, Long capaciteFoyer, String nomUniversite);
}
