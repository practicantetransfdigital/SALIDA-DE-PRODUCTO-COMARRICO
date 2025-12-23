// Configura estos valores con tus datos
const CONFIG_CORREOS = {
  EMAIL_ADMIN: "pragestionhumana@pastascomarrico.com",
  EMAIL_CALIDAD: "pragestionhumana@pastascomarrico.com",
  NOMBRE_SISTEMA: "Sistema de Seguimiento de Productos COMARRICO",
  ASUNTO_BASE: "[SDP-COMARRICO]",
}

const COLORES = {
  azulOscuro: "#003D7A",
  azul: "#0066CC",
  azulClaro: "#E3F2FD",
  naranja: "#E67E22",
  naranjaClaro: "#FFF8E1",
  rojo: "#C62828",
  rojoClaro: "#FFEBEE",
  verde: "#0F7B3F",
  verdeClaro: "#E8F5E9",
  gris: "#F4F6F9",
  grisOscuro: "#1A2332",
  grisTexto: "#4A5568",
  blanco: "#FFFFFF",
  borde: "#DFE3E8",
}

function generarHeaderCorreo(tipo, idRegistro) {
  const config = {
    nuevo: { color: COLORES.azulOscuro, icono: "NR", titulo: "NUEVO REGISTRO" },
    alerta: { color: COLORES.naranja, icono: "⚠", titulo: "ALERTA" },
    vencido: { color: COLORES.rojo, icono: "✕", titulo: "VENCIDO" },
    devuelto: { color: COLORES.verde, icono: "✓", titulo: "DEVUELTO" },
  }

  const estilos = config[tipo] || config.nuevo

  return `
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: ${estilos.color};">
      <tr>
        <td style="padding: 40px 30px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td width="70" style="vertical-align: middle;">
                <table cellpadding="0" cellspacing="0" style="width: 60px; height: 60px; background-color: rgba(255,255,255,0.2); border-radius: 8px;">
                  <tr>
                    <td style="text-align: center; font-size: 24px; font-weight: bold; color: ${COLORES.blanco};">
                      ${estilos.icono}
                    </td>
                  </tr>
                </table>
              </td>
              <td style="vertical-align: middle; padding-left: 20px;">
                <h1 style="margin: 0; padding: 0; font-size: 28px; font-weight: bold; color: ${COLORES.blanco}; font-family: Arial, sans-serif;">
                  ${estilos.titulo}
                </h1>
                <p style="margin: 8px 0 0 0; padding: 0; font-size: 14px; color: rgba(255,255,255,0.9); font-family: Arial, sans-serif;">
                  Sistema de Seguimiento de Productos COMARRICO
                </p>
              </td>
              <td width="80" style="vertical-align: middle; text-align: right;">
                <img src="https://comarrico.com/wp-content/uploads/2022/02/cropped-Logo-menu-comarrico-150x150.png" alt="COMARRICO" style="height: 50px; width: auto; display: block;" />
              </td>
            </tr>
          </table>
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 25px;">
            <tr>
              <td>
                <table cellpadding="0" cellspacing="0" style="background-color: rgba(255,255,255,0.2); border-radius: 6px; display: inline-block;">
                  <tr>
                    <td style="padding: 12px 24px; font-size: 13px; font-weight: bold; color: ${COLORES.blanco}; font-family: Arial, sans-serif; letter-spacing: 1px;">
                      REGISTRO: ${idRegistro}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `
}

function generarFooterCorreo(idRegistro) {
  const fechaActual = new Date().toLocaleString("es-CO", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })

  return `
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: ${COLORES.gris}; border-top: 1px solid ${COLORES.borde};">
      <tr>
        <td style="padding: 30px; text-align: center;">
          <p style="margin: 0 0 12px 0; font-size: 14px; font-weight: bold; color: ${COLORES.grisOscuro}; font-family: Arial, sans-serif;">
            ${CONFIG_CORREOS.NOMBRE_SISTEMA}
          </p>
          <p style="margin: 0 0 12px 0; font-size: 13px; color: ${COLORES.grisTexto}; font-family: Arial, sans-serif;">
            Este es un correo automático del sistema. No responder a este mensaje.
          </p>
          <p style="margin: 0; font-size: 12px; color: ${COLORES.grisTexto}; font-family: Arial, sans-serif;">
            ID: ${idRegistro} | ${fechaActual}
          </p>
        </td>
      </tr>
    </table>
  `
}

function generarTituloSeccion(titulo) {
  return `
    <table width="100%" cellpadding="0" cellspacing="0" style="margin: 0 0 20px 0;">
      <tr>
        <td style="padding: 15px 0; border-bottom: 2px solid ${COLORES.borde};">
          <h2 style="margin: 0; padding: 0; font-size: 16px; font-weight: bold; color: ${COLORES.azulOscuro}; font-family: Arial, sans-serif; text-transform: uppercase; letter-spacing: 0.5px;">
            ${titulo}
          </h2>
        </td>
      </tr>
    </table>
  `
}

function generarInfoItem(label, value, destacado = false) {
  const bgColor = destacado ? COLORES.rojoClaro : COLORES.gris
  const borderColor = destacado ? COLORES.rojo : COLORES.borde

  return `
    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 15px; background-color: ${bgColor}; border: 1px solid ${borderColor}; border-radius: 6px;">
      <tr>
        <td style="padding: 20px;">
          <p style="margin: 0 0 8px 0; font-size: 11px; font-weight: bold; color: ${COLORES.grisTexto}; font-family: Arial, sans-serif; text-transform: uppercase; letter-spacing: 0.5px;">
            ${label}
          </p>
          <p style="margin: 0; font-size: 15px; font-weight: ${destacado ? "bold" : "normal"}; color: ${destacado ? COLORES.rojo : COLORES.grisOscuro}; font-family: Arial, sans-serif; line-height: 1.5;">
            ${value}
          </p>
        </td>
      </tr>
    </table>
  `
}

function generarProductoDestacado(nombre, codigo) {
  return `
    <table width="100%" cellpadding="0" cellspacing="0" style="margin: 25px 0; background-color: ${COLORES.azulClaro}; border: 2px solid ${COLORES.azul}; border-radius: 8px;">
      <tr>
        <td style="padding: 30px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td width="60" style="vertical-align: top;">
                <table cellpadding="0" cellspacing="0" style="width: 50px; height: 50px; background-color: ${COLORES.blanco}; border-radius: 8px;">
                  <tr>
                    <td style="text-align: center; font-size: 24px; font-weight: bold; color: ${COLORES.azul};">
                      P
                    </td>
                  </tr>
                </table>
              </td>
              <td style="vertical-align: top; padding-left: 20px;">
                <h3 style="margin: 0 0 8px 0; font-size: 18px; font-weight: bold; color: ${COLORES.azulOscuro}; font-family: Arial, sans-serif;">
                  ${nombre || "Producto no especificado"}
                </h3>
                <p style="margin: 0; font-size: 14px; color: ${COLORES.grisTexto}; font-family: Arial, sans-serif;">
                  Código: <strong>${codigo || "No especificado"}</strong>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  `
}

function generarBadgeEstado(texto, tipo = "alerta") {
  const colores = {
    alerta: { bg: COLORES.naranjaClaro, texto: COLORES.naranja, borde: COLORES.naranja },
    peligro: { bg: COLORES.rojoClaro, texto: COLORES.rojo, borde: COLORES.rojo },
    exito: { bg: COLORES.verdeClaro, texto: COLORES.verde, borde: COLORES.verde },
  }

  const estilo = colores[tipo] || colores.alerta

  return `
    <table cellpadding="0" cellspacing="0" style="display: inline-block; background-color: ${estilo.bg}; border: 2px solid ${estilo.borde}; border-radius: 20px;">
      <tr>
        <td style="padding: 10px 20px;">
          <span style="font-size: 12px; font-weight: bold; color: ${estilo.texto}; font-family: Arial, sans-serif; text-transform: uppercase; letter-spacing: 0.5px;">
            ${texto}
          </span>
        </td>
      </tr>
    </table>
  `
}

/**
 * Enviar correo cuando se registra una nueva salida
 */
function enviarCorreoNuevoRegistro(datosRegistro, idRegistro) {
  try {
    Logger.log("Enviando correo de nuevo registro: ID " + idRegistro)

    const destinatarios = CONFIG_CORREOS.EMAIL_ADMIN
    const cc = CONFIG_CORREOS.EMAIL_CALIDAD

    const asunto = `${CONFIG_CORREOS.ASUNTO_BASE} Nueva salida registrada - ID: ${idRegistro}`

    const fechaActual = new Date().toLocaleString("es-CO", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })

    const cuerpoHTML = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: ${COLORES.gris};">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: ${COLORES.gris};">
    <tr>
      <td align="center" style="padding: 30px 15px;">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: ${COLORES.blanco}; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          
          ${generarHeaderCorreo("nuevo", idRegistro)}
          
          <tr>
            <td style="padding: 40px 30px;">
              
              ${generarTituloSeccion("INFORMACIÓN DEL REGISTRO")}
              
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="48%" style="vertical-align: top;">
                    ${generarInfoItem("FECHA Y HORA", fechaActual)}
                  </td>
                  <td width="4%"></td>
                  <td width="48%" style="vertical-align: top;">
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 15px;">
                      <tr>
                        <td>
                          <p style="margin: 0 0 8px 0; font-size: 11px; font-weight: bold; color: ${COLORES.grisTexto}; font-family: Arial, sans-serif; text-transform: uppercase;">
                            ESTADO
                          </p>
                          ${generarBadgeEstado("EN REVISIÓN", "alerta")}
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              ${generarProductoDestacado(datosRegistro.NombreProducto, datosRegistro.Código)}

              ${generarTituloSeccion("DETALLES DE LA SALIDA")}

              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="48%" style="vertical-align: top;">
                    ${generarInfoItem("CÓDIGO DEL PRODUCTO", datosRegistro.Código || "No especificado")}
                  </td>
                  <td width="4%"></td>
                  <td width="48%" style="vertical-align: top;">
                    ${generarInfoItem("TIPO DE SALIDA", datosRegistro["Tipo de Salida"] || "No especificado")}
                  </td>
                </tr>
                <tr>
                  <td width="48%" style="vertical-align: top;">
                    ${generarInfoItem("RESPONSABLE", datosRegistro.Responsable || "No especificado")}
                  </td>
                  <td width="4%"></td>
                  <td width="48%" style="vertical-align: top;">
                    ${generarInfoItem("UBICACIÓN", datosRegistro["Pasillo/Ubicación"] || "No especificado")}
                  </td>
                </tr>
                <tr>
                  <td width="48%" style="vertical-align: top;">
                    ${generarInfoItem("FECHA ESTIMADA DE RETORNO", datosRegistro["Fecha Estimada de Retorno"] || "No especificada")}
                  </td>
                  <td width="4%"></td>
                  <td width="48%" style="vertical-align: top;">
                    ${datosRegistro["Tipo de Plaga/Hallazgo"] ? generarInfoItem("TIPO DE PLAGA/HALLAZGO", datosRegistro["Tipo de Plaga/Hallazgo"]) : ""}
                  </td>
                </tr>
                 <tr>
                  <td width="48%" style="vertical-align: top;">
                    ${generarInfoItem("CANTIDAD", datosRegistro["Cantidad"] || "No especificada")}
                  </td>
                </tr>
              </table>

              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 30px; background-color: ${COLORES.azulClaro}; border-left: 4px solid ${COLORES.azul}; border-radius: 6px;">
                <tr>
                  <td style="padding: 25px;">
                    <h3 style="margin: 0 0 15px 0; font-size: 16px; font-weight: bold; color: ${COLORES.azul}; font-family: Arial, sans-serif;">
                      ACCIONES REQUERIDAS
                    </h3>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr><td style="padding: 8px 0; font-size: 14px; color: ${COLORES.grisOscuro}; font-family: Arial, sans-serif;">• Verificar la información del registro</td></tr>
                      <tr><td style="padding: 8px 0; font-size: 14px; color: ${COLORES.grisOscuro}; font-family: Arial, sans-serif;">• Realizar seguimiento según el tipo de salida</td></tr>
                      <tr><td style="padding: 8px 0; font-size: 14px; color: ${COLORES.grisOscuro}; font-family: Arial, sans-serif;">• Actualizar el estado cuando corresponda</td></tr>
                      <tr><td style="padding: 8px 0; font-size: 14px; color: ${COLORES.grisOscuro}; font-family: Arial, sans-serif;">• Programar recordatorio para fecha de retorno</td></tr>
                    </table>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          ${generarFooterCorreo(idRegistro)}

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`

    MailApp.sendEmail({
      to: destinatarios,
      cc: cc,
      subject: asunto,
      htmlBody: cuerpoHTML,
    })

    Logger.log("Correo de nuevo registro enviado a: " + destinatarios)
    return true
  } catch (error) {
    Logger.log("Error enviando correo de nuevo registro: " + error.toString())
    return false
  }
}

/**
 * Enviar correo cuando faltan 2 días para vencer
 */
function enviarCorreoAlertaVencimiento(registro) {
  try {
    Logger.log("Enviando correo de alerta (2 días): ID " + registro.ID)

    const destinatarios = CONFIG_CORREOS.EMAIL_ADMIN
    const cc = CONFIG_CORREOS.EMAIL_CALIDAD

    const diasRestantes = calcularDiasRestantes(registro["Tiempo Estimado de Retorno"])

    let textoAlerta, tipoAlerta
    if (diasRestantes === 0) {
      textoAlerta = "VENCE HOY"
      tipoAlerta = "peligro"
    } else if (diasRestantes === 1) {
      textoAlerta = "VENCE MAÑANA"
      tipoAlerta = "alerta"
    } else {
      textoAlerta = `VENCE EN ${diasRestantes} DÍAS`
      tipoAlerta = "alerta"
    }

    const asunto = `${CONFIG_CORREOS.ASUNTO_BASE} Alerta: Producto por vencer - ${registro.Código || "Sin código"} (${textoAlerta})`

    const cuerpoHTML = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: ${COLORES.gris};">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: ${COLORES.gris};">
    <tr>
      <td align="center" style="padding: 30px 15px;">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: ${COLORES.blanco}; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          
          ${generarHeaderCorreo("alerta", registro.ID)}
          
          <tr>
            <td style="padding: 40px 30px;">
              
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px; background-color: ${tipoAlerta === "peligro" ? COLORES.rojoClaro : COLORES.naranjaClaro}; border: 3px solid ${tipoAlerta === "peligro" ? COLORES.rojo : COLORES.naranja}; border-radius: 8px;">
                <tr>
                  <td style="padding: 30px; text-align: center;">
                    <p style="margin: 0 0 15px 0; font-size: 20px; font-weight: bold; color: ${tipoAlerta === "peligro" ? COLORES.rojo : COLORES.naranja}; font-family: Arial, sans-serif;">
                      ${textoAlerta}
                    </p>
                    <p style="margin: 0; font-size: 48px; font-weight: bold; color: ${tipoAlerta === "peligro" ? COLORES.rojo : COLORES.naranja}; font-family: Arial, sans-serif;">
                      ${diasRestantes === 0 ? "HOY" : diasRestantes === 1 ? "MAÑANA" : `${diasRestantes} DÍAS`}
                    </p>
                  </td>
                </tr>
              </table>

              ${generarTituloSeccion("INFORMACIÓN DEL PRODUCTO")}

              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="48%" style="vertical-align: top;">
                    ${generarInfoItem("CÓDIGO", registro.Código || "No especificado", diasRestantes === 0)}
                  </td>
                  <td width="4%"></td>
                  <td width="48%" style="vertical-align: top;">
                    ${generarInfoItem("NOMBRE", registro.NombreProducto || "No especificado", diasRestantes === 0)}
                  </td>
                </tr>
                <tr>
                  <td width="48%" style="vertical-align: top;">
                    ${generarInfoItem("TIPO DE SALIDA", registro["Tipo de Salida"] || "No especificado")}
                  </td>
                  <td width="4%"></td>
                  <td width="48%" style="vertical-align: top;">
                    ${generarInfoItem("RESPONSABLE", registro.Responsable || "No especificado", diasRestantes === 0)}
                  </td>
                </tr>
                <tr>
                  <td width="48%" style="vertical-align: top;">
                    ${generarInfoItem("FECHA DE RETIRO", formatearFechaSimple(registro["Fecha y Hora de Retiro"]) || "No especificada")}
                  </td>
                  <td width="4%"></td>
                  <td width="48%" style="vertical-align: top;">
                    ${generarInfoItem("FECHA DE RETORNO", formatearFechaSimple(registro["Tiempo Estimado de Retorno"]) || "No especificada", diasRestantes === 0)}
                  </td>
                </tr>
              </table>

              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 30px; background-color: ${COLORES.naranjaClaro}; border-left: 4px solid ${COLORES.naranja}; border-radius: 6px;">
                <tr>
                  <td style="padding: 25px;">
                    <h3 style="margin: 0 0 15px 0; font-size: 16px; font-weight: bold; color: ${COLORES.naranja}; font-family: Arial, sans-serif;">
                      ACCIONES RECOMENDADAS
                    </h3>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr><td style="padding: 8px 0; font-size: 14px; color: ${COLORES.grisOscuro}; font-family: Arial, sans-serif;">• Contactar al responsable para coordinar retorno</td></tr>
                      <tr><td style="padding: 8px 0; font-size: 14px; color: ${COLORES.grisOscuro}; font-family: Arial, sans-serif;">• Verificar disponibilidad del producto</td></tr>
                      <tr><td style="padding: 8px 0; font-size: 14px; color: ${COLORES.grisOscuro}; font-family: Arial, sans-serif;">• Actualizar fecha de retorno si es necesario</td></tr>
                      <tr><td style="padding: 8px 0; font-size: 14px; color: ${COLORES.grisOscuro}; font-family: Arial, sans-serif;">• Preparar documentación de devolución</td></tr>
                    </table>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          ${generarFooterCorreo(registro.ID)}

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`

    MailApp.sendEmail({
      to: destinatarios,
      cc: cc,
      subject: asunto,
      htmlBody: cuerpoHTML,
    })

    Logger.log("Correo de alerta enviado: ID " + registro.ID)
    return true
  } catch (error) {
    Logger.log("Error enviando correo de alerta: " + error.toString())
    return false
  }
}

/**
 * Enviar correo cuando el producto ya está vencido
 */
function enviarCorreoProductoVencido(registro) {
  try {
    Logger.log("Enviando correo de producto vencido: ID " + registro.ID)

    const destinatarios = CONFIG_CORREOS.EMAIL_ADMIN
    const cc = CONFIG_CORREOS.EMAIL_CALIDAD

    const diasVencido = calcularDiasVencidoDesdeFecha(registro["Tiempo Estimado de Retorno"])
    const textoDiasVencido = diasVencido === 0 ? "HOY" : diasVencido === 1 ? "1 DÍA" : `${diasVencido} DÍAS`

    const asunto = `${CONFIG_CORREOS.ASUNTO_BASE} Urgente: Producto vencido - ${registro.Código || "Sin código"} (${diasVencido === 0 ? "Vence hoy" : `Vencido hace ${textoDiasVencido}`})`

    const cuerpoHTML = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: ${COLORES.gris};">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: ${COLORES.gris};">
    <tr>
      <td align="center" style="padding: 30px 15px;">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: ${COLORES.blanco}; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          
          ${generarHeaderCorreo("vencido", registro.ID)}
          
          <tr>
            <td style="padding: 40px 30px;">
              
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px; background-color: ${COLORES.rojoClaro}; border: 3px solid ${COLORES.rojo}; border-radius: 8px;">
                <tr>
                  <td style="padding: 30px; text-align: center;">
                    <p style="margin: 0 0 15px 0; font-size: 22px; font-weight: bold; color: ${COLORES.rojo}; font-family: Arial, sans-serif;">
                      ⚠ ALERTA CRÍTICA ⚠
                    </p>
                    <p style="margin: 0; font-size: 48px; font-weight: bold; color: ${COLORES.rojo}; font-family: Arial, sans-serif;">
                      ${textoDiasVencido}
                    </p>
                    <p style="margin: 15px 0 0 0; font-size: 15px; font-weight: bold; color: ${COLORES.rojo}; font-family: Arial, sans-serif;">
                      ${diasVencido === 0 ? "El producto vence hoy" : `El producto lleva vencido ${textoDiasVencido}`}
                    </p>
                  </td>
                </tr>
              </table>

              ${generarTituloSeccion("INFORMACIÓN DEL PRODUCTO")}

              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="48%" style="vertical-align: top;">
                    ${generarInfoItem("CÓDIGO", registro.Código || "No especificado", true)}
                  </td>
                  <td width="4%"></td>
                  <td width="48%" style="vertical-align: top;">
                    ${generarInfoItem("NOMBRE", registro.NombreProducto || "No especificado", true)}
                  </td>
                </tr>
                <tr>
                  <td width="48%" style="vertical-align: top;">
                    ${generarInfoItem("TIPO DE SALIDA", registro["Tipo de Salida"] || "No especificado")}
                  </td>
                  <td width="4%"></td>
                  <td width="48%" style="vertical-align: top;">
                    ${generarInfoItem("RESPONSABLE", registro.Responsable || "No especificado", true)}
                  </td>
                </tr>
                <tr>
                  <td width="48%" style="vertical-align: top;">
                    ${generarInfoItem("FECHA DE RETIRO", formatearFechaSimple(registro["Fecha y Hora de Retiro"]) || "No especificada")}
                  </td>
                  <td width="4%"></td>
                  <td width="48%" style="vertical-align: top;">
                    ${generarInfoItem("FECHA DE RETORNO", formatearFechaSimple(registro["Tiempo Estimado de Retorno"]) || "No especificada", true)}
                  </td>
                </tr>
              </table>

              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 30px; background-color: ${COLORES.rojoClaro}; border-left: 4px solid ${COLORES.rojo}; border-radius: 6px;">
                <tr>
                  <td style="padding: 25px;">
                    <h3 style="margin: 0 0 15px 0; font-size: 16px; font-weight: bold; color: ${COLORES.rojo}; font-family: Arial, sans-serif;">
                      ⚡ ACCIONES INMEDIATAS
                    </h3>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr><td style="padding: 8px 0; font-size: 14px; color: ${COLORES.grisOscuro}; font-family: Arial, sans-serif;"><strong>• Retirar el producto de inmediato</strong></td></tr>
                      <tr><td style="padding: 8px 0; font-size: 14px; color: ${COLORES.grisOscuro}; font-family: Arial, sans-serif;">• Documentar el proceso de retiro</td></tr>
                      <tr><td style="padding: 8px 0; font-size: 14px; color: ${COLORES.grisOscuro}; font-family: Arial, sans-serif;">• Actualizar el estado del producto en el sistema</td></tr>
                      <tr><td style="padding: 8px 0; font-size: 14px; color: ${COLORES.grisOscuro}; font-family: Arial, sans-serif;">• Notificar a calidad sobre el vencimiento</td></tr>
                    </table>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          ${generarFooterCorreo(registro.ID)}

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`

    MailApp.sendEmail({
      to: destinatarios,
      cc: cc,
      bcc: CONFIG_CORREOS.EMAIL_ADMIN,
      subject: asunto,
      htmlBody: cuerpoHTML,
    })

    Logger.log("Correo de producto vencido enviado: ID " + registro.ID)
    return true
  } catch (error) {
    Logger.log("Error enviando correo de producto vencido: " + error.toString())
    return false
  }
}

/**
 * Enviar correo cuando un producto es devuelto
 */
function enviarCorreoProductoDevuelto(registro, devueltoA, observaciones, usuario) {
  try {
    Logger.log("Enviando correo de producto devuelto: ID " + registro.ID)

    const destinatarios = CONFIG_CORREOS.EMAIL_ADMIN
    const cc = CONFIG_CORREOS.EMAIL_CALIDAD

    const asunto = `${CONFIG_CORREOS.ASUNTO_BASE} Producto devuelto - ${registro.Código || "Sin código"}`

    const fechaDevolucion = new Date().toLocaleString("es-CO", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })

    const cuerpoHTML = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: ${COLORES.gris};">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: ${COLORES.gris};">
    <tr>
      <td align="center" style="padding: 30px 15px;">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: ${COLORES.blanco}; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          
          ${generarHeaderCorreo("devuelto", registro.ID)}
          
          <tr>
            <td style="padding: 40px 30px;">
              
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px; background-color: ${COLORES.verdeClaro}; border: 2px solid ${COLORES.verde}; border-radius: 8px;">
                <tr>
                  <td style="padding: 25px; text-align: center;">
                    ${generarBadgeEstado("DEVOLUCIÓN EXITOSA", "exito")}
                  </td>
                </tr>
              </table>

              ${generarTituloSeccion("INFORMACIÓN DEL PRODUCTO")}

              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="48%" style="vertical-align: top;">
                    ${generarInfoItem("CÓDIGO", registro.Código || "No especificado")}
                  </td>
                  <td width="4%"></td>
                  <td width="48%" style="vertical-align: top;">
                    ${generarInfoItem("NOMBRE", registro.NombreProducto || "No especificado")}
                  </td>
                </tr>
                <tr>
                  <td width="48%" style="vertical-align: top;">
                    ${generarInfoItem("TIPO DE SALIDA", registro["Tipo de Salida"] || "No especificado")}
                  </td>
                  <td width="4%"></td>
                  <td width="48%" style="vertical-align: top;">
                    ${generarInfoItem("RESPONSABLE ORIGINAL", registro.Responsable || "No especificado")}
                  </td>
                </tr>
                <tr>
                  <td width="48%" style="vertical-align: top;">
                    ${generarInfoItem("CANTIDAD", registro["Cantidad"] || "No especificado")}
                  </td>
                </tr>
              </table>

              ${generarTituloSeccion("DETALLES DE LA DEVOLUCIÓN")}

              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="48%" style="vertical-align: top;">
                    ${generarInfoItem("FECHA DE DEVOLUCIÓN", fechaDevolucion)}
                  </td>
                  <td width="4%"></td>
                  <td width="48%" style="vertical-align: top;">
                    ${generarInfoItem("DEVUELTO A", devueltoA || "No especificado")}
                  </td>
                </tr>
                <tr>
                  <td colspan="3">
                    ${generarInfoItem("USUARIO QUE REGISTRA", usuario || "No especificado")}
                  </td>
                </tr>
                ${
                  observaciones
                    ? `
                <tr>
                  <td colspan="3">
                    <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 15px; background-color: ${COLORES.gris}; border: 1px solid ${COLORES.borde}; border-radius: 6px;">
                      <tr>
                        <td style="padding: 20px;">
                          <p style="margin: 0 0 8px 0; font-size: 11px; font-weight: bold; color: ${COLORES.grisTexto}; font-family: Arial, sans-serif; text-transform: uppercase;">
                            OBSERVACIONES
                          </p>
                          <p style="margin: 0; font-size: 14px; color: ${COLORES.grisOscuro}; font-family: Arial, sans-serif; line-height: 1.6;">
                            ${observaciones}
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                `
                    : ""
                }
              </table>

            </td>
          </tr>

          ${generarFooterCorreo(registro.ID)}

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`

    MailApp.sendEmail({
      to: destinatarios,
      cc: cc,
      subject: asunto,
      htmlBody: cuerpoHTML,
    })

    Logger.log("Correo de producto devuelto enviado: ID " + registro.ID)
    return true
  } catch (error) {
    Logger.log("Error enviando correo de producto devuelto: " + error.toString())
    return false
  }
}

function calcularDiasRestantes(fechaEstimada) {
  if (!fechaEstimada) return 0;
  
  try {
    // Convertir la fecha estimada a objeto Date
    let fechaVencimiento;
    
    if (typeof fechaEstimada === "string") {
      // Si tiene formato dd/mm/yyyy
      if (fechaEstimada.includes("/")) {
        const [dia, mes, año] = fechaEstimada.split("/");
        fechaVencimiento = new Date(año, mes - 1, dia);
      } else {
        fechaVencimiento = new Date(fechaEstimada);
      }
    } else if (fechaEstimada instanceof Date) {
      fechaVencimiento = fechaEstimada;
    } else {
      fechaVencimiento = new Date(fechaEstimada);
    }
    
    // Establecer ambas fechas a medianoche para comparar solo días
    const hoy = new Date();
    fechaVencimiento.setHours(0, 0, 0, 0);
    hoy.setHours(0, 0, 0, 0);
    
    // Calcular diferencia en milisegundos
    const diferenciaEnMilisegundos = fechaVencimiento.getTime() - hoy.getTime();
    
    // Convertir a días usando Math.ceil para contar correctamente
    const diferenciaEnDias = Math.ceil(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24));
    
    return diferenciaEnDias;
  } catch (error) {
    Logger.log("Error calculando días restantes: " + error.toString());
    return 0;
  }
}

function formatearFechaSimple(fechaStr) {
  if (!fechaStr) return "No especificada";
  
  try {
    let fecha;
    
    if (typeof fechaStr === "string") {
      // Si tiene formato dd/mm/yyyy
      if (fechaStr.includes("/")) {
        const [dia, mes, año] = fechaStr.split("/");
        fecha = new Date(año, mes - 1, dia);
      } else {
        fecha = new Date(fechaStr);
      }
    } else if (fechaStr instanceof Date) {
      fecha = fechaStr;
    } else {
      fecha = new Date(fechaStr);
    }
    
    // Validar que sea una fecha válida
    if (isNaN(fecha.getTime())) {
      return fechaStr;
    }
    
    return fecha.toLocaleDateString("es-CO", { 
      day: "2-digit", 
      month: "2-digit", 
      year: "numeric" 
    });
  } catch (e) {
    return fechaStr;
  }
}

function calcularDiasVencidoDesdeFecha(fechaEstimada) {
  if (!fechaEstimada) return 0;
  
  try {
    // Convertir la fecha estimada a objeto Date
    let fechaVencimiento;
    
    if (typeof fechaEstimada === "string") {
      // Si tiene formato dd/mm/yyyy
      if (fechaEstimada.includes("/")) {
        const [dia, mes, año] = fechaEstimada.split("/");
        fechaVencimiento = new Date(año, mes - 1, dia);
      } else {
        fechaVencimiento = new Date(fechaEstimada);
      }
    } else if (fechaEstimada instanceof Date) {
      fechaVencimiento = fechaEstimada;
    } else {
      fechaVencimiento = new Date(fechaEstimada);
    }
    
    // Establecer ambas fechas a medianoche para comparar solo días
    const hoy = new Date();
    fechaVencimiento.setHours(0, 0, 0, 0);
    hoy.setHours(0, 0, 0, 0);
    
    // Calcular diferencia en milisegundos
    const diferenciaEnMilisegundos = hoy.getTime() - fechaVencimiento.getTime();
    
    // Convertir a días usando Math.floor
    const diferenciaEnDias = Math.floor(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24));
    
    return Math.max(0, diferenciaEnDias); // Retornar mínimo 0
  } catch (error) {
    Logger.log("Error calculando días vencido: " + error.toString());
    return 0;
  }
}

function calcularDiasDemoraDevolucion(fechaEstimadaRetorno) {
  if (!fechaEstimadaRetorno) return 0;
  
  try {
    // Convertir la fecha estimada a objeto Date
    let fechaEstimada;
    
    if (typeof fechaEstimadaRetorno === "string") {
      // Si tiene formato dd/mm/yyyy
      if (fechaEstimadaRetorno.includes("/")) {
        const [dia, mes, año] = fechaEstimadaRetorno.split("/");
        fechaEstimada = new Date(año, mes - 1, dia);
      } else {
        fechaEstimada = new Date(fechaEstimadaRetorno);
      }
    } else if (fechaEstimadaRetorno instanceof Date) {
      fechaEstimada = fechaEstimadaRetorno;
    } else {
      fechaEstimada = new Date(fechaEstimadaRetorno);
    }
    
    // Establecer ambas fechas a medianoche para comparar solo días
    const hoy = new Date();
    fechaEstimada.setHours(0, 0, 0, 0);
    hoy.setHours(0, 0, 0, 0);
    
    // Calcular diferencia en milisegundos
    const diferenciaEnMilisegundos = hoy.getTime() - fechaEstimada.getTime();
    
    // Convertir a días usando Math.floor
    const diferenciaEnDias = Math.floor(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24));
    
    return diferenciaEnDias; // Positivo = demora, Negativo = anticipación, 0 = justo a tiempo
  } catch (error) {
    Logger.log("Error calculando días de demora: " + error.toString());
    return 0;
  }
}