package tn.esprit.springproject.services;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.springproject.entities.Foyer;
import tn.esprit.springproject.entities.Universite;
import tn.esprit.springproject.repositories.FoyerRepository;
import tn.esprit.springproject.repositories.UniversiteRepository;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class UniversiteServiceImpl implements UniversiteService{
    @Autowired
    UniversiteRepository universiteRepository;
    @Autowired
    FoyerRepository foyerRepository;

    @Override
    public List<Universite> getUniversiteByCapaciteFoyerGreaterThan(Long capacite) {
        return universiteRepository.findByFoyerCapaciteFoyerGreaterThan(capacite);
    }

    @Override
    public List<Universite> getAllUniversites() {
        return (List<Universite>) universiteRepository.findAll();
    }

    @Override
    public Universite addUniversite(Universite universite) {
        return universiteRepository.save(universite);
    }

    @Override
    public Universite updateUniversite(Universite universite) {
        return universiteRepository.save(universite);
    }

    @Override
    public Universite getUniversiteById(Long idUniversite) {
        return universiteRepository.findById(idUniversite).get();
    }



    public void removeUniversite(long idUniversite) {
        Foyer f = foyerRepository.getFoyerByUniversiteId(idUniversite);
        if (f != null) {
            f.setUniversite(null);
            foyerRepository.save(f);
        }
        universiteRepository.deleteById((long) idUniversite);
    }

    @Override
    public Optional<Universite> getUniversiteByName(String nomUniversite) {
        return universiteRepository.findByNomUniversite(nomUniversite);
    }

    @Override
    public List<Universite> getAvailableUniversities() {
        return universiteRepository.findUniversitesWithFoyer();
    }
    @Override
    public boolean isUniversiteInUse(long universiteId) {
        Optional<Universite> universiteOptional = universiteRepository.findById(universiteId);

        if (universiteOptional.isPresent()) {
            Universite universite = universiteOptional.get();
            List<Foyer> foyers = Collections.singletonList(foyerRepository.getFoyerByUniversiteId(universite.getIdUniversite()));

            return !foyers.isEmpty(); // Return true if there are associated foyers, indicating the university is in use.
        }

        return false; // Return false if the university with the given id is not found.
    }


    @Override
    public List<Universite> getUniversiteWithoutFoyer() {
        return universiteRepository.getUniversiteWithoutFoyer();
    }


    @Override
    public List<Universite> getAllUniversiteWithoutFoyer() {

        List<Universite> allUniversites = (List<Universite>) universiteRepository.findAll();


        List<Universite> findUniversitesWithFoyer = getAvailableUniversities();

        allUniversites.removeAll(findUniversitesWithFoyer);

        return allUniversites;
    }


    @Override
    public List<Universite> searchByName(String query) {

        List<Universite> allUniversities = (List<Universite>) universiteRepository.findAll(); // or use your repository method to get all universities
        // Filter universities based on the query
        return allUniversities.stream()
                .filter(university ->
                        university.getNomUniversite().toLowerCase().startsWith(query.toLowerCase())
                )
                .collect(Collectors.toList());

    }



}
