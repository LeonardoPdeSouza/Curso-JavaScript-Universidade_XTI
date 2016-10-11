var tecnologia = "Java";
        switch(tecnologia){
            case "Java":
            case "C++":
            case "Cobol":
                alert("Linguagem de Programação");
                break;
            case "Oracle":
            case "sqlserver":
            case "postgresql":
                System.out.println("Banco de Dados");
                break;
                default:
                    alert("Tecnologia Desconhecida");
            }