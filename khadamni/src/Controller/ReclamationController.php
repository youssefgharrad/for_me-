<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use App\Repository\UtilisateurRepository ;
use App\Repository\ReclamationsRepository ;
use App\Form\ReclamationsType ;
use App\Form\ReclamationsModifType ;
use App\Entity\Reclamations ;
use App\Entity\Utilisateur ;

#[Route('/reclamations')]
class ReclamationController extends AbstractController
{
    #[Route('/reclamation', name: 'app_reclamation')]
    public function index(): Response
    {
        return $this->render('reclamation/index.html.twig', [
            'controller_name' => 'ReclamationController',
        ]);
    }


    #[Route('/profile', name: 'profile')]
    public function profile(): Response
    {
        return $this->render('reclamation/listeRec.html.twig', [
            'controller_name' => 'ReclamationController',
        ]);
    }


    #[Route('/showreclam', name: 'showreclam')]
    public function showreclam(ManagerRegistry $list)
    {
        $reclamation=$list->getRepository(Reclamations::class);
        $result=$reclamation->findAll();
        return $this->render('reclamation/listerRec.html.twig', [
            'reclamation'=>$result,
        ]);
    }


    #[Route('/supprimerreclamation/{id}', name: 'supprimerreclamation')]
    public function supprimerreclamation(Request $request, ManagerRegistry $entityManager, $id): Response
    {
     $reclamation = $entityManager->getRepository(Reclamations::class)->find($id);
     $reclamation=$entityManager->getManager()->remove($reclamation);
     $entityManager->getManager()->flush();
     return $this->redirectToRoute('profile');
    }


    #[Route('/ajouterreclam', name: 'ajouterreclam')]
    public function ajouterreclam(UtilisateurRepository $repo,Request $request,ManagerRegistry $entityManager): Response
    {
        $reclamation = new Reclamations();
        //$utilisateur = new Utilisateur();
        $form =$this->createForm(ReclamationsType::class,$reclamation) ;
        $form->handleRequest($request);

        //$reclamationIds = $repo->getallIds();
 
        if ($form->isSubmitted() && $form->isValid()) {
            $reclamation->setConsulter('non') ;
            $classe = $form->getData();
            $entityManager->getManager()->persist($classe);
            $entityManager->getManager()->flush();
            $this->addFlash('success', 'La reclamation a été ajoutée.');
            return $this->redirectToRoute('profile');
        }
        return $this->render('reclamation/ajouterreclam.html.twig', [
            //'reclamation_ids' => $reclamationIds,
            'form' => $form->createView(),
        ]);
    }

    #[Route('/modifreclam/{id}', name: 'modifreclam')]

        public function modifreclam(Request $request, ManagerRegistry $entityManager,$id ): Response
{
    $reclamation = $entityManager->getRepository(Reclamations::class)->find($id);
   
    $form =$this->createForm(ReclamationsModifType::class,$reclamation) ;
    $form->handleRequest($request);

    if ($form->isSubmitted() && $form->isValid()) {
        $reclamation = $form->getData();
        $entityManager->getManager()->flush();
        $this->addFlash('success', 'La reclamation a été modifiée.');
        return $this->redirectToRoute('profile');
    }
        return $this->render('reclamation/modifierreclam.html.twig', [
            'form' => $form->createView(),
        ]);
    }


    #[Route('/backreclamation', name: 'backreclamation')]
    public function backreclamation(ReclamationsRepository $repo): Response
    {
        $reclamation = $repo->findByConsulterNon();
        return $this->render('reclamation/backreclamation.html.twig'
        , ['reclam' => $reclamation]);
    }



    #[Route('/lf6', name: 'lf6')]
    public function lf6(ManagerRegistry $list)
    {
        $reclamation=$list->getRepository(Reclamations::class);
        $result=$reclamation->findAll();
        return $this->render('reclamation/lf6.html.twig', [
            'reclamation'=>$result,
        ]);
    }


}
