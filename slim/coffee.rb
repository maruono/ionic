Dir::chdir("./www")
Dir::chdir("./js")
#puts system("coffee -c test.coffee")


@str = Dir.glob(["*.coffee"])
@str.each do |name|
    p ("#{name}")
    puts system("coffee -c -b #{name}")
end