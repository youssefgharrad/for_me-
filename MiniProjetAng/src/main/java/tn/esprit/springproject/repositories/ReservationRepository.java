package tn.esprit.springproject.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import tn.esprit.springproject.entities.*;

import java.util.Date;
import java.util.List;

@Repository
public interface ReservationRepository extends CrudRepository<Reservation,Long> {
    List<Reservation> findByAnneeUniversitaireAfter(Date date);
    @Query("SELECT r FROM Reservation r JOIN r.etudiants e WHERE e.cin = :cin AND r.estValide = true")
    List<Reservation> findReservationsEstValideByEtudiant(@Param("cin") Long cin);


    @Query("SELECT r FROM Reservation r JOIN Chambre e WHERE e.idChambre= :idChambre AND r.estValide = true")
    List<Reservation> findReservationsEstValideByChambre(@Param("idChambre") Long idChambre);

    @Query("SELECT r FROM Reservation r JOIN r.chambres c WHERE c.idChambre = :idChambre AND r.estValide = true")
    List<Reservation> findReservationsEstValideByChambre2(@Param("idChambre") Long idChambre);


    @Query ("select r,c from Reservation r join r.chambres c")
    List<Reservation> findReservationsWithChambre();

    @Query("SELECT r,c FROM Reservation r LEFT JOIN FETCH r.chambres c WHERE r.idReservation = :idReservation")
    Reservation findReservationsWithChambreById(@Param("idReservation") Long idReservation);

    @Query("SELECT c FROM Reservation r JOIN r.chambres c WHERE r.idReservation = :idReservation")
    Chambre findChambreByReservationId(@Param("idReservation") Long idReservation);

}
