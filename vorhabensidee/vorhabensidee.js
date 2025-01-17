function generateText() {
    //Holen der Input-Felder
    const input_fgid = document.getElementById('foerdergegenstand_id').value.trim();
    const input_antragsnr = document.getElementById('antrags_nr').value.trim();
    const input_referenznr = document.getElementById('referenz_nr').value.trim();
    const input_kundennr = document.getElementById('kunden_nr').value.trim();
    const input_vorname = document.getElementById('vorname').value.trim();
    const input_nachname = document.getElementById('nachname').value.trim();
    const input_firma = document.getElementById('firma').value.trim();
    const input_mail = document.getElementById('mail_adresse').value.trim();
    const input_bzb = document.getElementById('bzb').value.trim();
    
    //Suchen der Ausgabefelder
    const inserted_fgid = document.getElementById('inserted_fgid');
    const inserted_antragsnr = document.getElementById('inserted_antragsnr');
    const inserted_referenznr = document.getElementById('inserted_referenznr');
    const inserted_kundennr = document.getElementById('inserted_kundennr');
    const inserted_vorname = document.getElementById('inserted_vorname');
    const inserted_nachname = document.getElementById('inserted_nachname');
    const inserted_firma = document.getElementById('inserted_firma');
    const inserted_mail = document.getElementById('inserted_mail');
    const inserted_bzb = document.getElementById('inserted_bzb');
    
    //Date Variablen
    var newDate = new Date();
    var current_date = newDate.getFullYear() + "" + (newDate.getMonth()+1) + "" + newDate.getDate() + "" + newDate.getHours() + "" + newDate.getMinutes();
    
    //wichtige Variablen
    const inserted_hinweis = document.getElementById('inserted_hinweis');
    const outputDiv = document.getElementById('output');


    //leeren des Hinweistextes
    inserted_hinweis.textContent = "";


    //Füllen der Felder nach Bedingungen
    if (input_fgid !== "") {
        inserted_fgid.textContent = input_fgid;
    } else {
        inserted_hinweis.textContent = "Bitte geben Sie mindestens die Fördergegenstand-ID ein, bevor Sie auf 'Generiere' klicken.";
    }

    if (input_kundennr !== "") {
        inserted_kundennr.textContent = input_kundennr;
    } else {
        inserted_hinweis.textContent = "Bitte geben Sie eine Kundennummer ein, bevor Sie auf 'Generiere' klicken.";
    }
    
    if (input_antragsnr !== "") {
        inserted_antragsnr.textContent = input_antragsnr;
    } else {
        inserted_antragsnr.textContent = current_date;
    }

    if (input_referenznr !== "") {
        inserted_referenznr.textContent = input_referenznr;
    } else {
        inserted_hinweis.textContent = "Bitte eine Referenznummer eintragen.";
        inserted_referenznr.textContent = "";
    }


    if (input_vorname !== "") {
        inserted_vorname.textContent = input_vorname;
    } else {
        inserted_vorname.textContent = "";
    }

    if (input_nachname !== "") {
        inserted_nachname.textContent = input_nachname;
    } else {
        inserted_nachname.textContent = "";
    }

    if (input_firma !== "") {
        inserted_firma.textContent = input_firma;
    } else {
        inserted_firma.textContent = "SAB";
    }

    if (input_mail !== "") {
        inserted_mail.textContent = input_mail;
    } else {
        inserted_mail.textContent = "customizer@sab.sachsen.de";
    }

    if (input_bzb !== "") {
        inserted_bzb.textContent = input_bzb;
    } else {
        inserted_bzb.textContent = "";
    }
}