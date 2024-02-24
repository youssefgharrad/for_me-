package tn.esprit.springproject.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import tn.esprit.springproject.entities.Foyer;
import tn.esprit.springproject.entities.Universite;

import java.util.List;

@Repository
public interface FoyerRepository extends CrudRepository<Foyer, Long> {
    List<Foyer> findByUniversiteAdresseContains(String adresse);

    @Query("SELECT f FROM Foyer f JOIN Chambre c ON (c.bloc.foyer.idFoyer = f.idFoyer) WHERE c.typeC = :typeC")
    List<Foyer> findFoyersByTypeC(@Param("typeC") String typeC);

    @Query("SELECT f FROM Foyer f WHERE f.universite.idUniversite = :idUniversite")
    Foyer getFoyerByUniversiteId(@Param("idUniversite") Long idUniversite);

    @Query("SELECT u FROM Universite u WHERE u.foyer IS NULL")
    List<Universite> findUniversitesWithoutFoyer();



    @Query("SELECT f FROM Foyer f WHERE f.universite.idUniversite IS NULL")
    List<Universite> findByFoyerIsNull();


    @Query("SELECT f FROM Foyer f WHERE f.nomFoyer LIKE :nomFoyer AND f.capaciteFoyer = :capaciteFoyer AND f.universite.nomUniversite LIKE :nomUniversite")
    List<Foyer> search(
            @Param("nomFoyer") String nomFoyer,
            @Param("capaciteFoyer") Long capaciteFoyer,
            @Param("nomUniversite") String nomUniversite
    );

}
