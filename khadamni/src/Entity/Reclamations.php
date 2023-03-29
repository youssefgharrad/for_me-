<?php

namespace App\Entity;

use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

/**
 * Reclamations
 *
 * @ORM\Table(name="reclamations", indexes={@ORM\Index(name="utilisateur_id", columns={"utilisateur_id"}), @ORM\Index(name="freelancer_id", columns={"freelancer_id"})})
 * @ORM\Entity
 */
class Reclamations
{
    /**
     * @var int
     *
     * @ORM\Column(name="reclamation_id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $reclamationId;

    /**
     * @var string
     *
     * @ORM\Column(name="reclamation_titre", type="string", length=255, nullable=false)
     */
    private $reclamationTitre;

    /**
     * @var string
     *
     * @ORM\Column(name="reclamation_subject", type="string", length=255, nullable=false)
     */
    private $reclamationSubject;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="date_reclamation", type="date", nullable=false)
     */
    private $dateReclamation;

    /**
     * @var string|null
     *
     * @ORM\Column(name="consulter", type="string", length=5, nullable=true)
     */
    private $consulter;

    /**
     * @var \Utilisateur
     *
     * @ORM\ManyToOne(targetEntity="Utilisateur")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="freelancer_id", referencedColumnName="id")
     * })
     */
    private $freelancer;

    /**
     * @var \Utilisateur
     *
     * @ORM\ManyToOne(targetEntity="Utilisateur")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="utilisateur_id", referencedColumnName="id")
     * })
     */
    private $utilisateur;

    public function getReclamationId(): ?int
    {
        return $this->reclamationId;
    }

    public function getReclamationTitre(): ?string
    {
        return $this->reclamationTitre;
    }

    public function setReclamationTitre(string $reclamationTitre): self
    {
        $this->reclamationTitre = $reclamationTitre;

        return $this;
    }

    public function getReclamationSubject(): ?string
    {
        return $this->reclamationSubject;
    }

    public function setReclamationSubject(string $reclamationSubject): self
    {
        $this->reclamationSubject = $reclamationSubject;

        return $this;
    }

    public function getDateReclamation(): ?\DateTimeInterface
    {
        return $this->dateReclamation;
    }

    public function setDateReclamation(\DateTimeInterface $dateReclamation): self
    {
        $this->dateReclamation = $dateReclamation;

        return $this;
    }

    public function getConsulter(): ?string
    {
        return $this->consulter;
    }

    public function setConsulter(?string $consulter): self
    {
        $this->consulter = $consulter;

        return $this;
    }

    public function getFreelancer(): ?Utilisateur
    {
        return $this->freelancer;
    }

    public function setFreelancer(?Utilisateur $freelancer): self
    {
        $this->freelancer = $freelancer;

        return $this;
    }

    public function getUtilisateur(): ?Utilisateur
    {
        return $this->utilisateur;
    }

    public function setUtilisateur(?Utilisateur $utilisateur): self
    {
        $this->utilisateur = $utilisateur;

        return $this;
    }


}
