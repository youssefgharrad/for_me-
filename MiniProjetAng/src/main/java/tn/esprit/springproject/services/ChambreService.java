package tn.esprit.springproject.services;

import jakarta.transaction.Transactional;
import tn.esprit.springproject.entities.Bloc;
import tn.esprit.springproject.entities.Chambre;
import tn.esprit.springproject.entities.TypeChambre;

import java.util.List;

public interface ChambreService {
    public List<Chambre> getChambreByIdBlocAndTypeC(Long idBloc, TypeChambre typeChambre);
    List<Chambre> getAllChambres();
    @Transactional
    Chambre addChambre(Chambre chambre, Long idBloc);

    @Transactional
    Chambre updateChambre(Chambre chambre, Long idChambre, Long idBloc);

    Chambre getChambreById(Long idChambre);

    void deleteChambre(Long idChambre);
}
