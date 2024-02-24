package tn.esprit.springproject.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.io.Serializable;
import java.util.List;
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
public class Chambre implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @ToString.Exclude
    @Setter(AccessLevel.NONE)
    long idChambre;
    long numeroChambre;
    long totale_cap ;

    @Enumerated(EnumType.STRING)
    TypeChambre typeC;

   /* @OneToMany
    List<Reservation> reservations;*/

    @ManyToMany
    @JsonIgnore
    private Set<Reservation> reservations;

    @ManyToOne
    Bloc bloc;
}
