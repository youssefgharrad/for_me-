package tn.esprit.springproject.controllers;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import tn.esprit.springproject.entities.Chambre;
import tn.esprit.springproject.entities.Foyer;
import tn.esprit.springproject.entities.Reservation;
import tn.esprit.springproject.entities.TypeChambre;
import tn.esprit.springproject.services.ReservationService;

import java.util.Date;
import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/reservation")
public class ReservationController {
    ReservationService reservationService;
    @GetMapping("/getAllReservations")
    public List<Reservation> getAllReservations(){
        List<Reservation> listReservations = reservationService.getAllReservations();
        return listReservations;
    }
    @GetMapping("/getReservation/{reservationId}")
    public Reservation getReservationById(@PathVariable("reservationId") Long reservationId){
        return reservationService.getReservationById(reservationId);
    }
    @DeleteMapping("/deleteReservation/{reservationId}")
    public void deleteReservation(@PathVariable("reservationId") Long reservationId){
        reservationService.deleteReservation(reservationId);
    }
    @PutMapping("/updateReservation")
    public Reservation updateReservation(@RequestBody Reservation r){
        Reservation reservation = reservationService.updateReservation(r);
        return reservation;
    }
    @GetMapping("/getRservationByAnneeUniversitaire")
    public List<Reservation> getRservationByAnneeUniversitaireAfter(@PathVariable("date") Date date) {
        return reservationService.getRservationByAnneeUniversitaireAfter(date);
    }
/*@PostMapping("/addReservation")
    public Reservation addReservation(@RequestBody Reservation reservation){
        return reservationService.addReservation(reservation) ;
    }*/

    @GetMapping("/getReservationByEtudiant/{idEtudiant}")
    public List<Reservation>  getReservationByEtudiant(@PathVariable("idEtudiant") long idEtudiant){
        return reservationService.getReservationByEtudiant(idEtudiant);
    }

    @GetMapping("/getReservationByChambre/{idChambre}")
    public List<Reservation>  getReservationByChambre(@PathVariable("idChambre") long idChambre){
        return reservationService.getReservationByChambre(idChambre);
    }


    @PostMapping("/addReservation/{idchambre}/{cinetudiant}")
    public void addReservation(@RequestBody Reservation reservation,@PathVariable("idchambre") long idChambre,@PathVariable("cinetudiant") long cinetudiant){
        System.out.println("controller");
        reservationService.addReservationWithChambre(reservation,idChambre,cinetudiant); ;

    }


    @PostMapping("/addReservation22/{idchambre}/{cinetudiant}")
    public void addReservation22(@RequestBody Reservation reservation, @PathVariable("idchambre") TypeChambre idChambre, @PathVariable("cinetudiant") long cinetudiant){
        System.out.println("controller");
        reservationService.addReservationWithChambre(reservation,idChambre,cinetudiant); ;

    }

    @GetMapping("/getAllReservationsWithChambre")
    public List<Reservation> getAllReservationsWithChambre(){
        List<Reservation> listReservations = reservationService.getChambreWReservation();
        return listReservations;
    }



    @GetMapping("/getAllReservationsWithChambreByid/{reservationId}")
    public Reservation getAllReservationsWithChambreByid(@PathVariable("reservationId") long reservationId){
        Reservation listReservations = reservationService.getChambreWReservationById(reservationId);
        return listReservations;
    }

    @GetMapping("/GetChambreByReservationId/{reservationId}")
    public Chambre GetChambreByReservationId(@PathVariable("reservationId") long reservationId){
        Chambre listReservations = reservationService.findChambreByReservationId(reservationId);
        return listReservations;
    }

    @GetMapping("/findRoomsByType")
    public List<Chambre> findRoomsByType(){
        List<Chambre> listReservations = reservationService.findRoomsByType();
        return listReservations;
    }
}
