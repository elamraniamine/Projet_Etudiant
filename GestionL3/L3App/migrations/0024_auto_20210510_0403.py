# Generated by Django 3.1.3 on 2021-05-10 02:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('L3App', '0023_auto_20210510_0338'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='matiere',
            name='Ue',
        ),
        migrations.AddField(
            model_name='matiere',
            name='Ues',
            field=models.ManyToManyField(blank=True, related_name='Matieres', to='L3App.Ue'),
        ),
    ]
