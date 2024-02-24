package tn.esprit.springproject.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import tn.esprit.springproject.entities.Bloc;
import tn.esprit.springproject.entities.Chambre;
import tn.esprit.springproject.entities.TypeChambre;

import java.util.List;

@Repository
public interface ChambreRepository extends CrudRepository<Chambre,Long> {
    List<Chambre> findByBlocIdBlocAndTypeC(long idBloc, TypeChambre typeChambre);
    @Query("SELECT c FROM Chambre c WHERE c.bloc.idBloc= :idBloc AND c.typeC='Double'")
    List<Chambre> findChambresDoublesByBloc(@Param("idBloc") Long idBloc);

    @Query("SELECT c FROM Chambre c WHERE c.typeC = :typeC AND c.totale_cap > 0 ORDER BY c.idChambre ASC LIMIT 1")
    Chambre findAvailableChambreByTypeC(@Param("typeC") TypeChambre typeC);

}
