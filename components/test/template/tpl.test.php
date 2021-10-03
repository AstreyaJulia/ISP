    <div class="mx-auto d-flex flex-column justify-content-between">
        <div class="d-flex justify-content-between align-items-center border mb-5">
            <div class="text-left p-4 d-flex justify-content-center justify-items-start align-items-center">
                <div class="pe-5">Очки: </div>
                <div>
                    <?php foreach ($gamers as $row): ?>
                    <div>
                        <span class="text-sm-start text-secondary"><span class="text-danger"><?= $row['gamer']; ?></span>:</span> <span class="text-xl text-primary"><?= $row['points']; ?></span>
                    </div>
                    <?php endforeach ?>
                </div>
            </div>
            <div class="mx-auto text-center">
                Ходит: <span class="text-xl-start text-danger"><?= $gamers[$ng]['gamer'] ?></span>
            </div>
            <div class="text-right p-4 d-flex justify-content-center">
                <form method="post" action="">
                    <button type="submit" class="btn btn-success me-3 text-white font-bold py-2 px-4 rounded text-sm" name="help">Подсказка</button>
                </form>
                <form method="post" action="">
                    <button type="submit" class="btn btn-secondary text-white font-bold py-2 px-4 rounded text-sm" name="restart">Начать заново</button>
                </form>
            </div>
        </div>
        <div class="d-flex flex-column justify-content-around">
            <div class="border d-flex justify-content-center class bg-white p-4 space-x-2 sm:space-x-4 text-3xl sm:text-4xl md:text-6xl">
            <?php foreach ($wordArr as $key => $value): ?>
            <?php if (in_array($key, array_keys(array_intersect($wordArr, $openLatter)))): ?>
                <div class="word-cell border text-center p-3 h1"><?= $value ?></div>
            <?php else: ?>
                <div class="word-cell border text-center bg-secondary-dark p-3 h1">&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <?php endif; ?>
            <?php endforeach ?>
            </div>
            <div class="d-flex flex-column align-items-center p-4 space-y-4">
                <?= $letterExist ?>
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <span class="text-secondary pe-2">Очков за ход:</span> <span class="text-3xl"><?= $mark ?></span>
                </div>
                <div>
                    <form method="post" action="">
                        <button type="submit" class="btn btn-primary font-bold py-2 px-4" name="spin">Крутить барабан</button>
                    </form>
                </div>
            </div>
            <div class="d-flex justify-content-center px-4">
                <form method="post" action="">
                    <div class="flex-row align-items-center justify-content-center">
                    <?php foreach ($latters as $key => $value): ?>
                    <?php if (in_array($key, array_keys(array_intersect($latters, $openLatter)))): ?>
                        <span  class="btn word-cell p-3 me-2 mb-2 text-center bg-secondary-dark text-light"><?= $value  ?></span>
                    <?php else: ?>
                        <button type="submit" class="btn word-cell p-3 me-2 mb-2 bg-white text-center" name="letter" value="<?= $value ?>"><?= $value ?></button>
                    <?php endif; ?>
                    <?php endforeach ?>
                    </div>
                </form>
            </div>
        </div>
    </div>
