<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use App\Repository\UtilisateurRepository ;
use App\Entity\Utilisateur;

use App\Controller\ReclamationController ;

class ReclamationsModifType extends AbstractType
{

    private $UtilisateurRepository;

    public function __construct(UtilisateurRepository $UtilisateurRepository)
    {
        $this->UtilisateurRepository = $UtilisateurRepository;
    }

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('reclamationId', HiddenType::class, [
            ])
            ->add('reclamationTitre', null, [
                'label' => 'Titre',
                'constraints' => [
                    new NotBlank(),
                    new Length(['max' => 255])
                ]
            ])
            ->add('reclamationSubject', TextareaType::class, [
                'constraints' => [
                    new NotBlank(),
                    new Length(['max' => 255])
                ]
            ])
           
            /*->add('dateReclamation', DateTimeType::class, [
                'label' => 'Date de création',
                'data' => new \DateTime(),
            ])
            ->add('consulter', ChoiceType::class, [
                'choices' => [
                    'Oui' => 'oui',
                    'Non' => 'non'
                ],
                'data' => 'non', // set the default value here
                'expanded' => true,
                'multiple' => false,
                'required' => true,
            ])*/
            ->add('dateReclamation', HiddenType::class, [
                'data' => new \DateTime(),
            ])
            ->add('consulter', ChoiceType::class, [
                'choices' => [
                    'Oui' => 'oui',
                    'Non' => 'non'
                ],
                'data' => 'non', // set the default value here
                'expanded' => true,
                'multiple' => false,
                'required' => true,
            ])
            
            ->add('submit', SubmitType::class, ['label' => 'Ajouter'])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            // Configure your form options here
            'reclamation_ids' => [],
        ]);
    }
}
