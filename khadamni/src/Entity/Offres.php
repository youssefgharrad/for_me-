<?php

namespace App\Entity;

use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

/**
 * Offres
 *
 * @ORM\Table(name="offres", indexes={@ORM\Index(name="Sous_service_id", columns={"Sous_service_id"}), @ORM\Index(name="Service_id", columns={"Service_id"})})
 * @ORM\Entity
 */
class Offres
{
    /**
     * @var int
     *
     * @ORM\Column(name="Offre_id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $offreId;

    /**
     * @var string|null
     *
     * @ORM\Column(name="Offre_adresse", type="string", length=255, nullable=true)
     */
    private $offreAdresse;

    /**
     * @var \DateTime|null
     *
     * @ORM\Column(name="Offre_date", type="date", nullable=true)
     */
    private $offreDate;

    /**
     * @var string|null
     *
     * @ORM\Column(name="Offre_description", type="string", length=255, nullable=true)
     */
    private $offreDescription;

    /**
     * @var string|null
     *
     * @ORM\Column(name="Offre_image", type="string", length=255, nullable=true)
     */
    private $offreImage;

    /**
     * @var int|null
     *
     * @ORM\Column(name="Service_id", type="integer", nullable=true)
     */
    private $serviceId;

    /**
     * @var \SousServices
     *
     * @ORM\ManyToOne(targetEntity="SousServices")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="Sous_service_id", referencedColumnName="Sous_service_id")
     * })
     */
    private $sousService;

    public function getOffreId(): ?int
    {
        return $this->offreId;
    }

    public function getOffreAdresse(): ?string
    {
        return $this->offreAdresse;
    }

    public function setOffreAdresse(?string $offreAdresse): self
    {
        $this->offreAdresse = $offreAdresse;

        return $this;
    }

    public function getOffreDate(): ?\DateTimeInterface
    {
        return $this->offreDate;
    }

    public function setOffreDate(?\DateTimeInterface $offreDate): self
    {
        $this->offreDate = $offreDate;

        return $this;
    }

    public function getOffreDescription(): ?string
    {
        return $this->offreDescription;
    }

    public function setOffreDescription(?string $offreDescription): self
    {
        $this->offreDescription = $offreDescription;

        return $this;
    }

    public function getOffreImage(): ?string
    {
        return $this->offreImage;
    }

    public function setOffreImage(?string $offreImage): self
    {
        $this->offreImage = $offreImage;

        return $this;
    }

    public function getServiceId(): ?int
    {
        return $this->serviceId;
    }

    public function setServiceId(?int $serviceId): self
    {
        $this->serviceId = $serviceId;

        return $this;
    }

    public function getSousService(): ?SousServices
    {
        return $this->sousService;
    }

    public function setSousService(?SousServices $sousService): self
    {
        $this->sousService = $sousService;

        return $this;
    }


}
