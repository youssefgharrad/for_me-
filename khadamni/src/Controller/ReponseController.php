<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Persistence\ManagerRegistry;
use App\Repository\UtilisateurRepository ;
use App\Repository\ReclamationsRepository ;
use App\Repository\ReponseRepository ;
use Symfony\Component\HttpFoundation\Request;
use App\Form\ReponseType ;
use App\Entity\Reponse ;
use App\Entity\Utilisateur ;
#[Route('/reponse')]
class ReponseController extends AbstractController
{
    #[Route('/reponse', name: 'app_reponse')]
    public function index(): Response
    {
        return $this->render('reponse/index.html.twig', [
            'controller_name' => 'ReponseController',
        ]);
    } 

    


    #[Route('/showreponse', name: 'showreponse')]
    public function showreponse(ManagerRegistry $list)
    {
        $reponse=$list->getRepository(Reponse::class);
        $result=$reponse->findAll();
        return $this->render('reponse/listerReponse.html.twig', [
            'reponse'=>$result,
        ]);
    }

    #[Route('/supprimerreponse/{id}', name: 'supprimerreponse')]
    public function supprimerreponse(Request $request, ManagerRegistry $entityManager, $id): Response
    {
     $reponse = $entityManager->getRepository(Reponse::class)->find($id);
     $reponse=$entityManager->getManager()->remove($reponse);
     $entityManager->getManager()->flush();
     // Get the current URL
    $currurl="http://127.0.0.1:8000/backend/dashboard/mophy.dexignzone.com/xhtml/AfficherReponse.html" ;
     // Redirect to the current URL
    return  new RedirectResponse($currurl);
    }


    #[Route('/ajouterreponse/{id}', name: 'ajouterreponse')]
    public function ajouterreponse(ReclamationsRepository $reclamationRepository,Request $request,ManagerRegistry $entityManager,$id): Response
    {
        $reponse = new Reponse();
        //$utilisateur = new Utilisateur();
        //$reponse->setId($id);
        $form =$this->createForm(ReponseType::class,$reponse, [
            'reclamation_id' => $id,
        ]);
        $form->handleRequest($request);

        //$reclamationIds = $repo->getallIds();
 
        if ($form->isSubmitted() && $form->isValid()) {

            //$reclamationId = $form->get('reclamationId')->getData();
            $reclamation = $reclamationRepository->find($id);
            if (!$reclamation) {
                throw new \Exception('Reclamation not found');
            }
            $reclamation->setConsulter('oui') ;
               $reponse->setId($id);
                $reponse->setUtilisateurId($reclamation->getUtilisateur());
                $reponse->setFreelancer($reclamation->getFreelancer());
           // $classe = $form->getData();
            $entityManager->getManager()->persist($reponse);
            $entityManager->getManager()->flush();
            $this->addFlash('success', 'La reponse a été ajoutée.');
           
        }
        return $this->render('reponse/ajouterreponse.html.twig', [
            //'reclamation_ids' => $reclamationIds,
            'form' => $form->createView(),
        ]);
    }
    
}
