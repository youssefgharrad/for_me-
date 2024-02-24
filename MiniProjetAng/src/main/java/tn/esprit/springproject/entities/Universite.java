package tn.esprit.springproject.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.io.Serializable;

@Entity
@Getter
@Setter
@ToString(includeFieldNames = false)
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Universite implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @ToString.Exclude
    @Setter(AccessLevel.NONE)
    Long idUniversite;

    String nomUniversite;

    String adresse;

    @OneToOne(mappedBy = "universite", cascade = CascadeType.PERSIST)
    @JsonIgnore
    private Foyer foyer;
}
