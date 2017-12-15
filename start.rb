require 'slim'

Dir::chdir("./www")

@slim = Slim::Template.new("index.slim").render(self)
@file = File.open("index.html",'w')
@file.print @slim
@file.close

Dir::chdir("..")

puts system("monaca preview -p 8080")