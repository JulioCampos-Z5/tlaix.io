<template>
    <div>
        <table class="border border-slate-500 w-full">
            <tr>
                <th class="border border-slate-600 w-1/6">Insumos</th>
                <th class="border border-slate-600 w-1/6">Unidad de medida</th>
                <th class="border border-slate-600 w-1/6">Cantidad</th>
                <th class="border border-slate-600 w-1/6">Perecedero</th>
                <th class="border border-slate-600 w-1/6">Fecha de caducidad</th>
                <th class="border border-slate-600 w-1/6">Costo actual</th>
            </tr>
            <tr>
                <td class="border border-slate-700">Reporte 1</td>
                <td class="border border-slate-700">U M</td>
                <td class="border border-slate-700">Can</td>
                <td class="border border-slate-700">Pe</td>
                <td class="border border-slate-700">F C</td>
                <td class="border border-slate-700">C A</td>
            </tr>
        </table>
        <button class="object-none object-right-bottom">Gestionar</button>
    </div>
</template>

<script>
export default {
    name: 'Insumos'
}
</script>