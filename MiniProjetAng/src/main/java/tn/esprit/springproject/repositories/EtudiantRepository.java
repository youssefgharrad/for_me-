package tn.esprit.springproject.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import tn.esprit.springproject.entities.*;

import java.util.List;
import java.util.Optional;

@Repository
public interface EtudiantRepository extends CrudRepository<Etudiant,Long> {
   List<Etudiant> findByReservationsEstValide (Boolean estValide);
   @Query("SELECT e FROM Etudiant e JOIN Reservation r WHERE r.anneeUniversitaire>CURRENT_DATE ")
   List<Etudiant> findEtudiantsByReservationsGreaterThan();

   @Query("SELECT r FROM Reservation r JOIN r.etudiants e WHERE e.cin = :cin AND r.estValide = true")
   List<Reservation> findReservationsEstValideByEtudiantCin(@Param("cin") long cin);

   @Query("SELECT e FROM Etudiant e where e.cin = :cin")
   Optional<Etudiant> findbycin(@Param("cin") long cin) ;


}
