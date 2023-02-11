import React, { useState } from "react";

const App = () => {
const [S1, setS1] = useState(false);
const [S2, setS2] = useState(false);
const [S3, setS3] = useState(false);
const [S4, setS4] = useState(false);
const [B1, setB1] = useState(false);
const [V1, setV1] = useState(false);
const [error, setError] = useState(false);

const handleS1Change = (e: any) => {
setS1(e.target.checked);
};

const handleS2Change = (e: any) => {
setS2(e.target.checked);
};

const handleS3Change = (e: any) => {
setS3(e.target.checked);
};

const handleS4Change = (e: any) => {
setS4(e.target.checked);
};

const handleSubmit = (e: any) => {
e.preventDefault();
if ((S1 && S2) || (S3 && S4)) {
setError(true);
} else {
setError(false);
setB1(S1 || S2);
setV1(!(S3 || S4));
}
};

return (
<div>
<form onSubmit={handleSubmit}>
<div>
<label>
S1:
<input type="checkbox" checked={S1} onChange={handleS1Change} />
</label>
<label>
S2:
<input type="checkbox" checked={S2} onChange={handleS2Change} />
</label>
</div>
<div>
<label>
S3:
<input type="checkbox" checked={S3} onChange={handleS3Change} />
</label>
<label>
S4:
<input type="checkbox" checked={S4} onChange={handleS4Change} />
</label>
</div>
<button type="submit">Verificar</button>
</form>
{error ? (
<p>
Problema com os sensores: não é possível que o sensor no topo da caixa
d'água esteja ativo e o do fundo esteja inativo.
</p>
) : (
<>
<p>
<strong>B1:</strong> {B1 ? "Ligado" : "Desligado"}
</p>
<p>
<strong>V1:</strong> {V1 ? "Aberto" : "Fechado"}
</p>
</>
)}
</div>
);
};

export default App;