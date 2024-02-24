package tn.esprit.springproject.services;

import tn.esprit.springproject.entities.Bloc;

import java.util.List;

public interface BlocService {

    public List<Bloc> getBlocByCapacite(Long capacite);
    List<Bloc> getAllBlocs();

    Bloc addBloc(Bloc bloc);

    Bloc updateBloc(Bloc bloc);

    Bloc getBlocById(Long idBloc);

    void deleteBloc(Long idBloc);


    List<Bloc> getBlocsForFoyer(Long foyerId);
}
