# Generated by Django 3.1.3 on 2021-05-15 12:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('L3App', '0024_auto_20210510_0403'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='etudiant',
            name='Nom',
        ),
        migrations.RemoveField(
            model_name='etudiant',
            name='Prenom',
        ),
        migrations.RemoveField(
            model_name='professeur',
            name='Nom',
        ),
        migrations.RemoveField(
            model_name='professeur',
            name='Prenom',
        ),
        migrations.AddField(
            model_name='etudiant',
            name='Nom_Prenom',
            field=models.CharField(blank=True, max_length=300, null=True),
        ),
        migrations.AddField(
            model_name='professeur',
            name='Nom_Prenom',
            field=models.CharField(blank=True, max_length=300, null=True),
        ),
    ]
