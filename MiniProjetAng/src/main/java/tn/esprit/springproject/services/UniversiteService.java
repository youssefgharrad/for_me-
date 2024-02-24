package tn.esprit.springproject.services;

import tn.esprit.springproject.entities.Foyer;
import tn.esprit.springproject.entities.Universite;

import java.util.List;
import java.util.Optional;

public interface UniversiteService {
    List<Universite> getUniversiteByCapaciteFoyerGreaterThan(Long capacite);
    List<Universite> getAllUniversites();

    Universite addUniversite(Universite universite);

    Universite updateUniversite(Universite universite);

    Universite getUniversiteById(Long idUniversite);

    public void removeUniversite(long idUniversite);

   public  Optional<Universite> getUniversiteByName(String nomUniversite);


    List<Universite> getAvailableUniversities();

    boolean isUniversiteInUse(long universiteId);

    List<Universite> getUniversiteWithoutFoyer();

    List<Universite> getAllUniversiteWithoutFoyer();

    List<Universite> searchByName(String query);
}
