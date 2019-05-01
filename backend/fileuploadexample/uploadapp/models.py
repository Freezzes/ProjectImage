from django.db import models

class File(models.Model):
    file = models.FileField(blank=False, null=False)
    caption = models.CharField(max_length=200, default='edit caption')

    def __str__(self):
        return self.file.name

class Comment(models.Model):
    imageID = models.IntegerField(default=0)
    comment_text = models.CharField(max_length=200,default='')
    def __str__(self):
        return self.comment_text

