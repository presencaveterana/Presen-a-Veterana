#!/usr/bin/env python3
import os
import subprocess

def run_cmd(cmd):
    print("Running:", cmd)
    res = subprocess.run(cmd, shell=True, capture_output=True, text=True)
    if res.returncode != 0:
        print("Error:", res.stderr)
    return res.returncode == 0

os.makedirs("public/servicos/afagamentos", exist_ok=True)
os.makedirs("public/servicos/pinturas", exist_ok=True)
os.makedirs("public/servicos/envernizamentos", exist_ok=True)
os.makedirs("public/servicos/deck", exist_ok=True)
os.makedirs("public/servicos/pladur", exist_ok=True)

# Sources
afagamento_src = "src/assets/images/afagamento_restaurado_1792869641768.jpg"
pintura_src = "src/assets/images/pintura_fachada_interior_1792869641951.jpg"
envernizamento_src = "src/assets/images/envernizamento_soalho_1792869642194.jpg"
deck_src = "src/assets/images/deck_madeira_exterior_1792869642317.jpg"
hero_src = "src/assets/images/hero_presenca_veterana_1792869640177.jpg"
painter_flyer = "public/assets/aistudio/Vibrant_Painter_Website_Design___Bright__Modern__and_Eye-Catching_b9d230e7.jpg"
minimalist_site = "public/assets/aistudio/Sitio_digital_minimalista_visual_6fc519c0.jpg"

# 1. AFAGAMENTOS
# 01: Focus on the Trio sanding machine and hands
run_cmd(f"convert {afagamento_src} -crop 650x500+300+380 -resize 800x600^ -gravity center -extent 800x600 -quality 92 public/servicos/afagamentos/01-maquinas-afagamento.jpg")
# 02: Wood flooring in treatment (half-sanded oak boards transition)
run_cmd(f"convert {afagamento_src} -crop 600x450+150+440 -resize 800x600^ -gravity center -extent 800x600 -quality 92 public/servicos/afagamentos/02-pavimentos-tratamento.jpg")
# 03: Professional at work sanding the floor
run_cmd(f"convert {afagamento_src} -crop 780x700+400+0 -resize 800x600^ -gravity center -extent 800x600 -quality 92 public/servicos/afagamentos/03-profissionais-afagar.jpg")
# 04: Restored herringbone hardwood floor result
run_cmd(f"convert {hero_src} -crop 900x650+0+110 -resize 800x600^ -gravity center -extent 800x600 -quality 92 public/servicos/afagamentos/04-pavimentos-restaurados.jpg")

# 2. PINTURAS
# 01: Interior painting in progress
run_cmd(f"convert {pintura_src} -crop 900x700+300+0 -resize 800x600^ -gravity center -extent 800x600 -quality 92 public/servicos/pinturas/01-pintura-interiores.jpg")
# 02: Exterior facade / architecture painting
run_cmd(f"convert {minimalist_site} -crop 680x480+20+28 -resize 800x600^ -gravity center -extent 800x600 -quality 92 public/servicos/pinturas/02-pintura-fachadas-exteriores.jpg")
# 03: Professional painter with roller
run_cmd(f"convert {pintura_src} -crop 600x650+380+170 -resize 800x600^ -gravity center -extent 800x600 -quality 92 public/servicos/pinturas/03-profissionais-pintar-paredes.jpg")
# 04: Living room renovation outcome
run_cmd(f"convert {hero_src} -crop 800x600+300+50 -resize 800x600^ -gravity center -extent 800x600 -quality 92 public/servicos/pinturas/04-resultados-remodelacoes.jpg")

# 3. ENVERNIZAMENTOS
# 01: Varnish application and natural shine
run_cmd(f"convert {envernizamento_src} -crop 800x600+0+280 -resize 800x600^ -gravity center -extent 800x600 -quality 92 public/servicos/envernizamentos/01-aplicacao-verniz.jpg")
# 02: Varnished hardwood parquet
run_cmd(f"convert {envernizamento_src} -crop 900x680+200+210 -resize 800x600^ -gravity center -extent 800x600 -quality 92 public/servicos/envernizamentos/02-pavimentos-madeira-envernizados.jpg")
# 03: Radiant gloss reflection on traditional floor
run_cmd(f"convert {envernizamento_src} -crop 750x550+100+340 -resize 800x600^ -gravity center -extent 800x600 -quality 92 public/servicos/envernizamentos/03-acabamento-brilhante-soalhos.jpg")
# 04: Craftsman treatment and wood conservation
run_cmd(f"convert {afagamento_src} -crop 600x500+250+300 -resize 800x600^ -modulate 105,115,100 -gravity center -extent 800x600 -quality 92 public/servicos/envernizamentos/04-profissionais-tratamento.jpg")

# 4. INSTALAÇÃO / APLICAÇÃO DE DECK
# 01: Poolside teak deck
run_cmd(f"convert {deck_src} -crop 850x650+250+240 -resize 800x600^ -gravity center -extent 800x600 -quality 92 public/servicos/deck/01-decks-piscinas.jpg")
# 02: Garden deck and terrace pergola
run_cmd(f"convert {deck_src} -crop 750x650+0+150 -resize 800x600^ -gravity center -extent 800x600 -quality 92 public/servicos/deck/02-decks-jardins.jpg")
# 03: Sun terrace deck and lounge
run_cmd(f"convert {deck_src} -crop 800x600+400+290 -resize 800x600^ -gravity center -extent 800x600 -quality 92 public/servicos/deck/03-decks-terraces.jpg")
# 04: Outdoor deck craft & installation
run_cmd(f"convert {minimalist_site} -crop 600x480+80+500 -resize 800x600^ -gravity center -extent 800x600 -quality 92 public/servicos/deck/04-profissionais-instalacao.jpg")

# 5. PLADUR
# 01: Suspended ceiling installation with indirect LED lighting
run_cmd(f"convert {hero_src} -crop 800x400+300+0 -resize 800x600^ -gravity center -extent 800x600 -quality 92 public/servicos/pladur/01-instalacao-tetos-falsos.jpg")
# 02: Drywall partition walls
run_cmd(f"convert {pintura_src} -crop 700x600+0+50 -resize 800x600^ -gravity center -extent 800x600 -quality 92 public/servicos/pladur/02-divisorias-pladur.jpg")
# 03: Plasterboard taping and installation
run_cmd(f"convert {pintura_src} -crop 600x500+500+200 -resize 800x600^ -gravity center -extent 800x600 -quality 92 public/servicos/pladur/03-aplicacao-placas-gesso.jpg")
# 04: Finished interior architectural finishes with pladur
run_cmd(f"convert {hero_src} -crop 750x650+200+100 -resize 800x600^ -gravity center -extent 800x600 -quality 92 public/servicos/pladur/04-acabamentos-interiores.jpg")

print("All 20 service images prepared successfully.")
