package tn.esprit.springproject.controllers;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import tn.esprit.springproject.entities.Chambre;
import tn.esprit.springproject.entities.Etudiant;
import tn.esprit.springproject.services.EtudiantService;

import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/etudiant")
public class EtudiantController {
    EtudiantService etudiantService;
    @GetMapping("/getAllEtudiants")
    public List<Etudiant> getAllEtudiants(){
        List<Etudiant> listEtudiants = etudiantService.getAllEtudiants();
        return listEtudiants;
    }
    @GetMapping("/getEtudiant/{etudiantId}")
    public Etudiant getEtudiantById(@PathVariable("etudiantId") long etudiantId){
        return etudiantService.getEtudiantById(etudiantId);
    }
    @PostMapping("/addEtudiant")
    public Etudiant addEtudiant(@RequestBody Etudiant e){
        Etudiant etudiant = etudiantService.addEtudiant(e);
        return etudiant;
    }
    @DeleteMapping("/deleteEtudiant/{etudiantId}")
    public void deleteEtudiant(@PathVariable("etudiantId") long etudiantId){
        etudiantService.deleteEtudiant(etudiantId);
    }
    @PutMapping("/updateEtudiant")
    public Etudiant updateEtudiant(@RequestBody Etudiant e){
        Etudiant etudiant = etudiantService.updateEtudiant(e);
        return etudiant;
    }
    @GetMapping("/getEtudiantByReservationEstValide")
    public List<Etudiant> getEtudiantByReservationEstValide(@PathVariable("estValide") Boolean estValide) {
        return etudiantService.getEtudiantByReservationEstValide(estValide);
    }


}
