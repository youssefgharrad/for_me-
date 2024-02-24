package tn.esprit.springproject.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import tn.esprit.springproject.entities.Bloc;
import tn.esprit.springproject.entities.Universite;

import java.util.List;

@Repository
public interface BlocRepository extends CrudRepository <Bloc,Long> {
    public List<Bloc> findByCapaciteBlocAndNomBloc(Long capacite,String name);
    @Query("SELECT b FROM Bloc b WHERE b.foyer.universite.idUniversite= :idUniversite")
    List<Bloc> findBlocsByUniversite(@Param("idUniversite") Long idUniversite);

    @Query("SELECT b FROM Bloc b WHERE b.foyer.idFoyer = :foyerId")
    List<Bloc> findBlocsByFoyerId(@Param("foyerId") Long foyerId);


}
