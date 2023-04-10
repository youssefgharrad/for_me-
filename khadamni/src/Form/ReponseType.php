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

class ReponseType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
        ->add('reclamationId', HiddenType::class, [
            'data' => $options['reclamation_id']
        ])

        ->add('disc', TextareaType::class, [
            'constraints' => [
                new NotBlank(),
                new Length(['max' => 255])
            ]
        ])
        
            /* ->add('disc', null, [
                'label' => 'Disc',
                'constraints' => [
                    new NotBlank(),
                    new Length(['max' => 255])
                ]
            ])
           
           ->add('dateReclamation', DateTimeType::class, [
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
            ->add('dateRep', HiddenType::class, [
                'data' => new \DateTime(),
            ])
            /*->add('consulter', EntityType::class, [
                'class' => Reclmations::class,
                'data' => 'oui', // set the default value here
                'expanded' => true,
                'multiple' => false,
                'required' => true,
            ])
            ->add('utilisateur', EntityType::class, [
                'class' => Utilisateur::class,
                'choices' => $this->UtilisateurRepository->findUsers(),
                'choice_label' => 'id',
                'placeholder' => 'Choisir un utilisateur',
                'required' => true,
            ])
            ->add('freelancer', EntityType::class, [
                'class' => Utilisateur::class,
                'choices' => $this->UtilisateurRepository->findFreelancer(),
                'choice_label' => 'id',
                'placeholder' => 'Choisir un freelancer',
                'required' => true,
            ])*/
            ->add('submit', SubmitType::class, ['label' => 'Ajouter'])
        ;

        //$builder->get('reclamationId')->setData($options['reclamation_id']);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            // Configure your form options here
        ]);

        $resolver->setRequired(['reclamation_id']);
    }
}
