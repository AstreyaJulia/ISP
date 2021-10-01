<div class="bg-blue-50" style="min-width: 375px">
    <div class="mx-auto max-w-4xl h-screen d-flex flex-column justify-content-between">
        <div class="block sm:flex justify-content-between align-items-center border bg-gray-100">
            <div class="text-left p-4 d-flex justify-content-center justify-items-start align-items-center">
                <div class="pr-8">Очки: </div>
                <div>
                    <?php foreach ($gamers as $row): ?>
                    <div>
                        <span class="text-sm text-gray-700"><span class="text-danger"><?= $row['gamer']; ?></span>:</span> <span class="text-xl text-primary"><?= $row['points']; ?></span>
                    </div>
                    <?php endforeach ?>
                </div>
            </div>
            <div class="mx-auto text-center">
                Ходит: <span class="text-xl text-danger"><?= $gamers[$ng]['gamer'] ?></span>
            </div>
            <div class="text-right p-4 d-flex justify-content-center space-x-2">
                <form method="post" action="">
                    <button type="submit" class="btn btn-success me-3 text-white font-bold py-2 px-4 rounded text-sm" name="help">Подсказка</button>
                </form>
                <form method="post" action="">
                    <button type="submit" class="btn btn-secondary text-white font-bold py-2 px-4 rounded text-sm" name="restart">Начать заново</button>
                </form>
            </div>
        </div>
        <div class="d-flex flex-column flex-1 justify-content-around">
            <div class="border d-flex justify-content-center class bg-white p-4 space-x-2 sm:space-x-4 text-3xl sm:text-4xl md:text-6xl">
            <?php foreach ($wordArr as $key => $value): ?>
            <?php if (in_array($key, array_keys(array_intersect($wordArr, $openLatter)))): ?>
                <div class="word-cell border text-center"><?= $value ?></div>
            <?php else: ?>
                <div class="word-cell border text-center bg-black">&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <?php endif; ?>
            <?php endforeach ?>
            </div>
            <div class="d-flex flex-column items-center p-4 space-y-4">
                <?= $letterExist ?>
                <div class="d-flex justify-content-between items-center">
                    <span class="text-gray-700 pr-2">Очков за ход:</span> <span class="text-3xl"><?= $mark ?></span>
                </div>
                <div>
                    <form method="post" action="">
                        <button type="submit" class="btn btn-primary bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" name="spin">Крутить барабан</button>
                    </form>
                </div>
            </div>
            <div class="d-flex justify-content-center px-4">
                <form method="post" action="">
                    <div class="grid grid-cols-8 sm:grid-cols-12 gap-2 text-md sm:text-xl md:text-3xl">
                    <?php foreach ($latters as $key => $value): ?>
                    <?php if (in_array($key, array_keys(array_intersect($latters, $openLatter)))): ?>
                        <span  class="word-cell p-2 text-center bg-black"><?= $value  ?></span>
                    <?php else: ?>
                        <button type="submit" class="word-cell p-2 bg-white hover:bg-blue-700 text-center" name="letter" value="<?= $value ?>"><?= $value ?></button>
                    <?php endif; ?>
                    <?php endforeach ?>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
