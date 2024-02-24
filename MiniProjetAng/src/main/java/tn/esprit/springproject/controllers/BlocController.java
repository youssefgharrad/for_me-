package tn.esprit.springproject.controllers;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.springproject.entities.Bloc;
import tn.esprit.springproject.services.BlocService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/bloc")
public class BlocController {
    BlocService blocService;
    @GetMapping("/getAllBlocs")
    public List<Bloc> getAllBlocs(){
    List<Bloc> listBlocs = blocService.getAllBlocs();
    return listBlocs;
    }
    @GetMapping("/getBloc/{blocId}")
    public Bloc getBlocById(@PathVariable("blocId") long blocId){
        return blocService.getBlocById(blocId);
    }
    @PostMapping("/addBloc")
    public Bloc addBloc(@RequestBody Bloc b){
        Bloc bloc = blocService.addBloc(b);
        return bloc;
    }
    @DeleteMapping("/deleteBloc/{blocId}")
    public void deleteBloc(@PathVariable("blocId") long blocId){
        blocService.deleteBloc(blocId);
    }
    @PutMapping("/updateBloc")
    public Bloc updateBloc(@RequestBody Bloc b){
        return blocService.updateBloc(b);

    }
    @GetMapping("/getBlocByCapacite")
    public List<Bloc> getBlocByCapacite(@PathVariable("capacite") long capacite){
        return blocService.getBlocByCapacite(capacite);
    }

    @GetMapping("/getBlocsForFoyer/{foyerId}")
    public ResponseEntity<List<String>> getBlocsForFoyer(@PathVariable Long foyerId) {
        List<Bloc> blocs = blocService.getBlocsForFoyer(foyerId);

        // Extract a specific property (e.g., nomBloc) from each Bloc
        List<String> blocNames = blocs.stream()
                .map(Bloc::getNomBloc)
                .collect(Collectors.toList());

        return ResponseEntity.ok(blocNames);
    }
}
