block('title')(

    match((_, json) => json.level).def()(function() {
        this.mods = this.mods || {};
        this.mods.level = this.ctx.level;
        return applyNext();
    }),

    mod('level', 2).tag()('h2')
)
