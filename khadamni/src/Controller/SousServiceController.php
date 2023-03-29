<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\SousServices;
use App\Repository\SousServicesRepository;

class SousServiceController extends AbstractController
{
    
        #[Route('/sousservices/{serviceId}', name: 'sousservices')]
        public function showSService(int $serviceId): Response
        {
            $sservices =$this->getDoctrine()->getRepository(SousServices::class)->findBy(['serviceId' => $serviceId]);
    
            return $this->render('sous_service/ShowSousService.html.twig', ['sservices' => $sservices]);
        }
}
