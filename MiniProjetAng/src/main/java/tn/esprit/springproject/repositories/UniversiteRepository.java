package tn.esprit.springproject.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import tn.esprit.springproject.entities.Foyer;
import tn.esprit.springproject.entities.Universite;

import java.util.List;
import java.util.Optional;

@Repository
public interface UniversiteRepository extends CrudRepository<Universite, Long> {
    List<Universite> findByFoyerCapaciteFoyerGreaterThan(Long capacite);

    @Query("SELECT u FROM Universite u JOIN Chambre c ON (c.bloc.foyer.universite.idUniversite = u.idUniversite) " +
            "WHERE c.idChambre = :idChambre")
    Universite findUniversiteByChambre(@Param("idChambre") Long idChambre);

    Optional<Universite> findByNomUniversite(String nomUniversite);

    @Query("SELECT u FROM Universite u WHERE u.foyer IS NULL ")
    List<Universite> getUniversiteWithoutFoyer();

    @Query("SELECT u FROM Universite u WHERE u.foyer IS NOT NULL")
    List<Universite> findUniversitesWithFoyer();

    // New query to find a university by ID
    @Query("SELECT u FROM Universite u WHERE u.idUniversite = :idUniversite")
    Optional<Universite> findUniversiteById(@Param("idUniversite") Long idUniversite);

    @Query("SELECT f FROM Foyer f WHERE f.universite.idUniversite IS NULL")
    List<Foyer> findByFoyerIsNull();
}
