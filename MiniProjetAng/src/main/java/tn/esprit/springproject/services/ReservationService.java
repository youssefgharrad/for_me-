package tn.esprit.springproject.services;

import tn.esprit.springproject.entities.Chambre;
import tn.esprit.springproject.entities.Foyer;
import tn.esprit.springproject.entities.Reservation;
import tn.esprit.springproject.entities.TypeChambre;

import java.util.Date;
import java.util.List;

public interface ReservationService {
    List<Reservation> getRservationByAnneeUniversitaireAfter(Date date);
    List<Reservation> getAllReservations();

    Reservation updateReservation(Reservation reservation);

    Reservation getReservationById(Long idReservation);

    void deleteReservation(Long idReservation);
    public Reservation addReservation(Reservation reservation) ;

    List<Reservation> getReservationByEtudiant(long idetudiant);
    List<Reservation> getReservationByChambre(long idchambre);

    // public void addReservationWithChambre(Reservation reservation, Long chambreId);
    public void addReservationWithChambre(Reservation reservation, Long chambreId, Long idEtudiant) ;
    List<Reservation>  getChambreWReservation();
    Reservation  getChambreWReservationById(long idReservation);

    Chambre findChambreByReservationId(long idReservation);

    public void addReservationWithChambre(Reservation reservation, TypeChambre typeC, Long idEtudiant);

}
