<?php


// src/Controller/ServiceController.php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Services;


class ServiceController extends AbstractController
{
    #[Route('/services', name: 'services')]

    public function showService(): Response
    {
        $services = $this->getDoctrine()->getRepository(Services::class)->findAll();
        return $this->render('service/showService.html.twig', ['services' => $services]);
    }
}

