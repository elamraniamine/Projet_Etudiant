# Generated by Django 3.1.3 on 2021-05-05 01:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('L3App', '0004_auto_20210505_0125'),
    ]

    operations = [
        migrations.AlterField(
            model_name='etudiant',
            name='Tuteur',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='Tuteur', to='L3App.professeur'),
        ),
    ]
