package tn.esprit.springproject.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.io.Serializable;
import java.util.Date;
import java.util.Set;

@Entity
@Getter
@Setter
@ToString(includeFieldNames = false)
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Reservation implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @ToString.Exclude
    @Setter(AccessLevel.NONE)
    Long idReservation;
    Date anneeUniversitaire;
    boolean estValide;

    @ManyToMany(mappedBy = "reservations")
    private Set<Etudiant> etudiants;


    @ManyToMany(mappedBy = "reservations")
    @JsonBackReference
    private Set<Chambre> chambres;

}
