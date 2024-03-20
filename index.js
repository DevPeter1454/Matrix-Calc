function calculateDeterminant() {
        // Get matrix elements
        const mat11 = parseFloat(document.getElementById("mat11").value);
        const mat12 = parseFloat(document.getElementById("mat12").value);
        const mat13 = parseFloat(document.getElementById("mat13").value);

        const mat21 = parseFloat(document.getElementById("mat21").value);
        const mat22 = parseFloat(document.getElementById("mat22").value);
        const mat23 = parseFloat(document.getElementById("mat23").value);

        const mat31 = parseFloat(document.getElementById("mat31").value);
        const mat32 = parseFloat(document.getElementById("mat32").value);
        const mat33 = parseFloat(document.getElementById("mat33").value);

        // Calculate determinant
        const determinant =
          mat11 * (mat22 * mat33 - mat23 * mat32) -
          mat12 * (mat21 * mat33 - mat23 * mat31) +
          mat13 * (mat21 * mat32 - mat22 * mat31);

        // Display result
        document.getElementById(
          "result"
        ).innerText = `Determinant: ${determinant}`;
}
