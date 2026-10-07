// GERADO PELO BRIXLY — não edite. Some a cada build de preview.
//
// Config usada SÓ no preview, para o editor visual: carimba cada elemento HTML com
// data-brx="arquivo:linha:coluna", que é como o editor volta da tela para o código.
// A publicação usa o vite.config do projeto e nunca passa por aqui.
import base from "./vite.config"
import react from "@vitejs/plugin-react"

function carimbo({ types: t }: any) {
  return {
    visitor: {
      // Arquivo de cena 3D (react-three-fiber): as tags minúsculas dele (<mesh>, <group>…) são
      // objetos do three, não HTML — e o fiber lê "data-brx" como o caminho "data.brx" e derruba
      // a cena inteira (TypeError reading 'brx'). Arquivo que importa three/@react-three: sem carimbo.
      Program(caminho: any, estado: any) {
        estado.brx3d = caminho.node.body.some((n: any) => {
          const de = n.type === "ImportDeclaration" ? String(n.source && n.source.value) : ""
          return de === "three" || de.startsWith("three/") || de.startsWith("@react-three/")
        })
      },
      JSXOpeningElement(caminho: any, estado: any) {
        if (estado.brx3d) return
        const nome = caminho.node.name
        // só tag HTML (minúscula): componente React não vira elemento no DOM
        if (!t.isJSXIdentifier(nome) || !/^[a-z]/.test(nome.name)) return
        if (caminho.node.attributes.some((a: any) => a.name && a.name.name === "data-brx")) return
        const loc = caminho.node.loc
        if (!loc) return
        const barra = String.fromCharCode(92)
        const raiz = String(estado.cwd || process.cwd()).split(barra).join("/")
        const arq = String(estado.filename || "").split(barra).join("/").replace(raiz + "/", "")
        caminho.node.attributes.push(
          t.jsxAttribute(
            t.jsxIdentifier("data-brx"),
            t.stringLiteral(arq + ":" + loc.start.line + ":" + loc.start.column)))
      },
    },
  }
}

const cru: any = base
const cfg: any = typeof cru === "function" ? cru({ command: "build", mode: "production" }) : cru
// tira o plugin-react do projeto e põe o nosso, que é o mesmo mais o carimbo. Sem isso o
// JSX passaria duas vezes pelo transformador.
const semReact = (cfg.plugins || []).filter((p: any) => {
  const n = p && (p.name || (Array.isArray(p) && p[0] && p[0].name)) || ""
  return !String(n).includes("vite:react")
})

export default { ...cfg, plugins: [...semReact, react({ babel: { plugins: [carimbo] } })] }
