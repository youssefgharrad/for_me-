package tn.esprit.springproject.controllers;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import tn.esprit.springproject.entities.Bloc;
import tn.esprit.springproject.entities.Chambre;
import tn.esprit.springproject.entities.TypeChambre;
import tn.esprit.springproject.services.ChambreService;

import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/chambre")
public class ChambreController {
    ChambreService chambreService;
    @GetMapping("/getAllChambres")
    public List<Chambre> getAllChambres(){
        List<Chambre> listChambres = chambreService.getAllChambres();
        return listChambres;
    }
    @GetMapping("/getChambre/{chambreId}")
    public Chambre getChambreById(@PathVariable("chambreId") long chambreId){
        return chambreService.getChambreById(chambreId);
    }
    @PostMapping(value = "/addChambre" ,consumes =  "application/json", produces = "application/json")
    public Chambre addChambre(@RequestBody Chambre c,@RequestParam(name = "idBloc") Long idBloc){


        Chambre chambre = chambreService.addChambre( c, idBloc);
        return chambre;
    }
    @DeleteMapping("/deleteChambre/{chambreId}")
    public void deleteChambre(@PathVariable("chambreId") long chambreId){
        chambreService.deleteChambre(chambreId);
    }
    @PutMapping(value ="/updateChambre/{idChambre}/{idBloc}",consumes =  "application/json", produces = "application/json")
    public Chambre updateChambre(
            @RequestBody Chambre c,
            @PathVariable Long idChambre,
            @PathVariable Long idBloc
    ) {
        Chambre chambre = chambreService.updateChambre(c, idChambre, idBloc);
        return chambre;
    }
    @GetMapping("/getChambreByIdBlocAndTypeC")
    public List<Chambre> getChambreByIdBlocAndTypeC(@PathVariable("idBloc") Long idBloc,@PathVariable("typeChambre") TypeChambre typeChambre) {
        return chambreService.getChambreByIdBlocAndTypeC(idBloc,typeChambre);
    }

}