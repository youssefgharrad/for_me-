package tn.esprit.springproject.services;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.springproject.entities.Chambre;
import tn.esprit.springproject.entities.Etudiant;
import tn.esprit.springproject.entities.Reservation;
import tn.esprit.springproject.entities.TypeChambre;
import tn.esprit.springproject.repositories.ChambreRepository;
import tn.esprit.springproject.repositories.EtudiantRepository;
import tn.esprit.springproject.repositories.ReservationRepository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ReservationServiceImpl implements  ReservationService {
    ReservationRepository reservationRepository;

    @Override
    public List<Reservation> getRservationByAnneeUniversitaireAfter(Date date) {
        return reservationRepository.findByAnneeUniversitaireAfter(date);
    }

    @Override
    public List<Reservation> getAllReservations() {
        return (List<Reservation>) reservationRepository.findAll();
    }

    @Override
    public Reservation updateReservation(Reservation reservation) {
        return reservationRepository.save(reservation);
    }

    @Override
    public Reservation getReservationById(Long idReservation) {
        return reservationRepository.findById(idReservation).get();
    }

    @Override
    public void deleteReservation(Long idReservation) { reservationRepository.deleteById(idReservation); }

    @Override
    public Reservation addReservation(Reservation reservation) {
        return reservationRepository.save(reservation) ;
    }

    @Override
    public List<Reservation> getReservationByEtudiant(long cin) {
        return reservationRepository.findReservationsEstValideByEtudiant(cin) ;
    }

    @Override
    public List<Reservation> getReservationByChambre(long idchambre) {
        return reservationRepository.findReservationsEstValideByChambre2(idchambre) ;
    }

    @Override
    public void addReservationWithChambre(Reservation reservation, Long chambreId, Long idEtudiant) {

    }


    @Autowired
    private ChambreRepository chambreRepository;
    private EtudiantRepository etudiantRepository ;
    private ChambreServiceImpl chambreService ;

    public void addReservationWithChambre(Reservation reservation, TypeChambre typeC, Long idEtudiant) {
        Optional<Etudiant> optionalEtudiant = etudiantRepository.findbycin(idEtudiant);
        if (optionalEtudiant.isPresent()) {
            Etudiant etudiant = optionalEtudiant.get();
            if (etudiant.getReservations().isEmpty()) {
                Chambre availableChambre = chambreRepository.findAvailableChambreByTypeC(typeC);
                if (availableChambre != null) {
                    if (availableChambre.getTotale_cap() > 0) {
                        Reservation savedReservation = reservationRepository.save(reservation);

                        //reservation.setChambres(availableChambre);
                        //Reservation savedReservation = reservationRepository.save(reservation);

                        availableChambre.getReservations().add(savedReservation);
                        chambreRepository.save(availableChambre);

                        etudiant.getReservations().add(savedReservation);
                        etudiantRepository.save(etudiant);

                        long newCap = availableChambre.getTotale_cap() - 1;
                        availableChambre.setTotale_cap(newCap);
                        chambreRepository.save(availableChambre);

                        // Other logic...
                    } else {
                        System.out.println("******* eroor capacite of chamber ==0  ********");
                    }
                } else {
                    System.out.println("******* chamber is null  ********");
                }
            } else {
                System.out.println("******* eroor etudiant reservation is full  ********");
            }
        } else {
            System.out.println("******* eroor etudiant untrouvable  ********");
        }
    }


    @Override
    public List<Reservation>  getChambreWReservation() {

        List<Reservation> reservationCh =reservationRepository.findReservationsWithChambre();
        System.out.println("List \n"+reservationCh+"\n-----------------------------------\n");
        return reservationCh;
    }

    @Override
    public Reservation getChambreWReservationById(long idReservation) {
        return reservationRepository.findReservationsWithChambreById(idReservation);
    }

    @Override
    public Chambre findChambreByReservationId(long idReservation) {
        return reservationRepository.findChambreByReservationId(idReservation) ;
    }

}
