
    const botao = document.getElementById("botao");

        const cores = {
          normal: {
            body: "#EEEFFF",
            h1: "#000000",
            p: "#000000",
            ul: "#000000",
            footerP: "#6D47C2",
            p1: "#000000",
          },
          trocado: {
            body: "#171835",
            h1: "white",
            p: "#ffffff81",
            ul: "white",
            footerP: "white",
            p1: "#ffffff81",
          },
        };

        let modo = "normal";

        botao.addEventListener("click", () => {
            const corAtual = cores[modo];
            document.body.style.backgroundColor = corAtual.body;
            document.querySelector("h1").style.color = corAtual.h1;
            document.querySelector("p").style.color = corAtual.p;
            document.querySelector("ul").style.color = corAtual.ul;
            document.querySelector("footer p").style.color = corAtual.footerP;
            document.querySelector(".p1").style.color = corAtual.p1;

            modo = modo === "normal" ? "trocado" : "normal";
        });
