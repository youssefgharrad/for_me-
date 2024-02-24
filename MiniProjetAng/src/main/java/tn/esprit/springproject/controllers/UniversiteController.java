package tn.esprit.springproject.controllers;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.springproject.entities.Foyer;
import tn.esprit.springproject.entities.Reservation;
import tn.esprit.springproject.entities.Universite;
import tn.esprit.springproject.services.UniversiteService;

import java.util.List;
import java.util.Optional;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/universite")
public class UniversiteController {
    UniversiteService universiteService;
    @GetMapping("/getAllUniversites")
    public List<Universite> getAllUniversites(){
        List<Universite> listUniversites = universiteService.getAllUniversites();
        return listUniversites;
    }
    @GetMapping("/getUniversite/{universiteId}")
    public Universite getUniversiteById(@PathVariable("universiteId") long universiteId){
        return universiteService.getUniversiteById(universiteId);
    }
    @PostMapping("/addUniversite")
    public Universite addUniversite(@RequestBody Universite u){
        Universite universite = universiteService.addUniversite(u);
        return universite;
    }


    @DeleteMapping("/deleteUniversite/{universiteId}")
    public void removeUniversite(@PathVariable(value ="universiteId") long universiteId) {
        universiteService.removeUniversite(universiteId);
    }

    @PutMapping("/updateUniversite")
    public Universite updateUniversite(@RequestBody Universite u){
        Universite universite = universiteService.updateUniversite(u);
        return universite;
    }
    @GetMapping("/getUniversiteByCapaciteFoyer")
    public List<Universite> getUniversiteByCapaciteFoyerGreaterThan(@PathVariable("capacite") Long capacite) {
        return universiteService.getUniversiteByCapaciteFoyerGreaterThan(capacite);
    }

    @GetMapping("/byName/{nomUniversite}")
    public ResponseEntity<Universite> getUniversiteByName(@PathVariable String nomUniversite) {
        Optional<Universite> universite = universiteService.getUniversiteByName(nomUniversite);
        return universite.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/getAllUniversitesName")
    public List<Universite> getAllUniversitesName(){
        List<Universite> listUniversites = universiteService.getAllUniversites();
        return listUniversites;
    }

    @GetMapping("/getUniversiteWithFoyer")
    public List<Universite> getAvailableUniversities() {
        return universiteService.getAvailableUniversities();
    }

    @GetMapping("/isUniversiteInUse/{universiteId}")
    public ResponseEntity<Boolean> isUniversiteInUse(@PathVariable("universiteId") long universiteId) {
        boolean isInUse = universiteService.isUniversiteInUse(universiteId);
        return ResponseEntity.ok(isInUse);
    }

    @GetMapping("/getUniversiteWithoutFoyer")
    public List<Universite> getUniversiteWithoutFoyer() {
        List<Universite> universitesWithoutFoyer = universiteService.getUniversiteWithoutFoyer();
        return universitesWithoutFoyer;
    }

    @GetMapping("/getAllUniversiteWithoutFoyer")
    public ResponseEntity<List<Universite>> getAllUniversiteWithoutFoyer() {
        List<Universite> getAvailableUniversities = universiteService.getAllUniversiteWithoutFoyer();
        return ResponseEntity.ok(getAvailableUniversities);
    }

    @GetMapping("/search")
    public ResponseEntity<List<Universite>> searchUniversities(@RequestParam String query) {
        List<Universite> universities = universiteService.searchByName(query);
        return ResponseEntity.ok(universities);
    }
}
