# Generated by Django 3.1.3 on 2021-05-06 12:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('L3App', '0008_auto_20210505_0358'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='etudiant',
            name='Groupe',
        ),
        migrations.AddField(
            model_name='etudiant',
            name='Groupe',
            field=models.ManyToManyField(blank=True, null=True, related_name='Etudiants', to='L3App.Groupe'),
        ),
    ]
