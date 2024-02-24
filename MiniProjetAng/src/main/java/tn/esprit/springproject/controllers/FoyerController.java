package tn.esprit.springproject.controllers;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import tn.esprit.springproject.entities.Etudiant;
import tn.esprit.springproject.entities.Foyer;
import tn.esprit.springproject.entities.Universite;
import tn.esprit.springproject.services.FoyerService;
import tn.esprit.springproject.services.UniversiteService;

import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/foyer")
public class FoyerController {
    FoyerService foyerService;
    UniversiteService universiteService;

    @GetMapping("getFoyerByUniversite/{idUniversite}")
    public Foyer getFoyerByUniversite(@PathVariable  long idUniversite){
        return foyerService.getFoyerByUniversite(idUniversite);
    }
    @GetMapping("/retrieveAllFoyer")
    public List<Foyer> retrieveAllFoyer(){
         return foyerService.getAllFoyers();

    }
    @GetMapping("/getFoyer/{foyerId}")
    public Foyer getFoyerById(@PathVariable("foyerId") long foyerId){
        return foyerService.getFoyerById(foyerId);
    }

    @PostMapping("/addFoyer")
    public Foyer addFoyer(@RequestBody Foyer f){
        Foyer foyer = foyerService.addFoyer(f);
        return foyer;
    }
    @DeleteMapping("/deleteFoyer/{foyerId}")
    public void deleteFoyer(@PathVariable("foyerId") long foyerId){
        foyerService.deleteFoyer(foyerId);
    }


    @PutMapping("/updateFoyer")
    public Foyer updateFoyer(@RequestBody Foyer f){
        return foyerService.updateFoyer(f);
    }


    @GetMapping("/getFoyerByAdresseUniversite")
    public List<Foyer> getFoyerByAdresseUniversite(@PathVariable("adresse") String adresse) {
        return foyerService.getFoyerByAdresseUniversite(adresse);
    }


    @GetMapping("/getAvailableUniversities")
    public List<Universite> getAvailableUniversities() {
        return universiteService.getAvailableUniversities();
    }


    @GetMapping("/search")
    public List<Foyer> searchFoyers(
            @RequestParam(name = "nomFoyer", required = false) String nomFoyer,
            @RequestParam(name = "capaciteFoyer", required = false) Long capaciteFoyer,
            @RequestParam(name = "nomUniversite", required = false) String nomUniversite
    ) {
        return foyerService.searchFoyers(nomFoyer, capaciteFoyer, nomUniversite);
    }

}
