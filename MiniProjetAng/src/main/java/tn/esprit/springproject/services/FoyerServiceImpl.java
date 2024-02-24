package tn.esprit.springproject.services;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.springproject.entities.Foyer;
import tn.esprit.springproject.entities.Universite;
import tn.esprit.springproject.repositories.FoyerRepository;

import java.util.List;

@Service
@AllArgsConstructor
public class FoyerServiceImpl implements  FoyerService{

    FoyerRepository foyerRepository;

    @Override
    public List<Foyer> getFoyerByAdresseUniversite(String adresse) {
        return foyerRepository.findByUniversiteAdresseContains(adresse);
    }

    @Override
    public List<Foyer> getAllFoyers() {
        return (List<Foyer>) foyerRepository.findAll();
    }

    @Override
    public Foyer addFoyer(Foyer foyer) {
        return foyerRepository.save(foyer);
    }

    @Override
    public Foyer updateFoyer(Foyer foyer) {
        return foyerRepository.save(foyer);
    }

    @Override
    public Foyer getFoyerById(Long idFoyer) {
        return foyerRepository.findById(idFoyer).get();
    }

    @Override
    public void deleteFoyer(Long idFoyer) {
        foyerRepository.deleteById(idFoyer);
    }

    @Override
    public Foyer getFoyerByUniversite( long idUniversite) {
        return foyerRepository.getFoyerByUniversiteId(idUniversite);
    }

    @Override
    public List<Universite> getAvailableUniversities() {
        return foyerRepository.findUniversitesWithoutFoyer();
    }


    @Override
    public List<Foyer> searchFoyers(String nomFoyer, Long capaciteFoyer, String nomUniversite) {
        return foyerRepository.search(nomFoyer, capaciteFoyer, nomUniversite);
    }

}
